<?php
include_once("../entity/EntityOrderDetail.php"); 

class ModelOrderDetail {  
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
                    array_push($ordersList, new EntityOrderDetail($row->id, $row->donhangId,  $row->mobileId, $row->quantity));
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

    public function insertOrderDetailToDB($orderId, $mobileId, $quantity) {
        $SQLcmd = "INSERT INTO donhangdetail VALUES ('0','$orderId','$mobileId','$quantity')";
        $errorMessage = "Can not insert order detail to database";
        return $this -> insertAPI($SQLcmd, $errorMessage); 
    }

    public function getOrderDetailByOrderIdFromDB($id) {
        $SQLcmd = "SELECT * FROM donhangdetail WHERE (donhangdetail.donhangId = '$id')";
        $errorMessage = "Can not get order detail from database";
        return $this -> getAPI($SQLcmd, $errorMessage); 
    }
}  

?>