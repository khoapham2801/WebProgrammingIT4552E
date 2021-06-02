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
        $connect = mysqli_connect($server, $user, $pass);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            mysqli_select_db($connect, $mydb);
            
            if (mysqli_query($connect, $SQLcmd)){
                $last_id = $connect -> insert_id;
                return $last_id;
            } else {
                echo "$SQLcmd";
                die ($errorMessage);
            } 
            
        }
        mysqli_close ($connect);
    }

    public function insertOrderToDB($name, $email, $address, $phone, $date, $totalCost) {
        $table_name = 'order';
        $SQLcmd = "INSERT INTO $table_name VALUES ('0','$name','$email','$address','$phone', '$date', $totalCost)";
        $errorMessage = "Can not insert order to database";
        return $this -> insertAPI($SQLcmd, $errorMessage); 
    }
}  

?>