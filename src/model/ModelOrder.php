<?php
include_once("EntityOrder.php"); 

class ModelOrder {  
    public function getAPI ($SQLcmd, $errorMessage) {
        $server = 'localhost';
        $user = 'root';
        $pass = '';
        $mydb = 'mobileshopdb';
        $connect = mysqli_connect($server, $user, $pass);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            mysqli_select_db($connect, $mydb);
            if ($resource = mysqli_query($connect, $SQLcmd)){
                $ordersList = [];
                while ($row = mysqli_fetch_object($resource) ) {
                    array_push($ordersList, new EntityOrder($row->id, $row->name,  $row->email, $row->address, $row->phone, $row->date, $row->totalCost));
                }
                return $ordersList;
            } else {
                die ($errorMessage);
            }
        }
        mysqli_close($connect);
    }

    public function insertAPI ($SQLcmd, $errorMessage) {
        $server = 'localhost';
        $user = 'root';
        $pass = '';
        $mydb = 'mobileshopdb';
        $connect = mysqli_connect($server, $user, $pass, $mydb);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            if (mysqli_query($connect, $SQLcmd)){
                $last_id = $connect -> insert_id;
                echo $last_id;
            } else {
                echo "$SQLcmd";
                die ($errorMessage);
            } 
            
        }
        mysqli_close ($connect);
    }

    public function updateAPI ($SQLcmd, $errorMessage) {
        $server = 'localhost';
        $user = 'root';
        $pass = '';
        $mydb = 'mobileshopdb';
        $connect = mysqli_connect($server, $user, $pass, $mydb);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            if (!mysqli_query($connect, $SQLcmd)){
                echo "$SQLcmd";
                die ($errorMessage);
            } 
        }
        
        mysqli_close($connect);
    }

    public function insertOrderToDB($name, $email, $address, $phone, $date, $totalCost) {
        $SQLcmd = "INSERT INTO donhang VALUES ('0','$name','$email','$address','$phone', '$date', $totalCost)";
        $errorMessage = "Can not insert order to database";
        return $this -> insertAPI($SQLcmd, $errorMessage); 
    }

    public function getOrderByIdFromDB($id) {
        $SQLcmd = "SELECT * FROM donhang WHERE (donhang.id = '$id')";
        $errorMessage = "Can not get order by id from database";
        return $this -> getAPI($SQLcmd, $errorMessage)[0]; 
    }

    public function getAllOrdersFromDB() {
        $SQLcmd = "SELECT * FROM donhang";
        $errorMessage = "Can not get all orders from database";
        return $this -> getAPI($SQLcmd, $errorMessage); 
    }

    public function deleteOrderById($orderId) {
        $SQLcmd = "DELETE FROM donhang WHERE (donhang.id = '$orderId')";
        $errorMessage = "Cannot delete order in DB";
        return $this -> updateAPI ($SQLcmd, $errorMessage);
    }
}  

?>