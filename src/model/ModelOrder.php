<?php
include_once("EntityOrder.php"); 

class ModelOrder {  
    private $server = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $mydb = 'mobileshopdb';

    public function getAPI ($SQLcmd, $errorMessage) {
        
        $connect = mysqli_connect($server, $user, $pass);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            mysqli_select_db($connect, $mydb);
            if ($resource = mysqli_query($connect, $SQLcmd)){
                $ordersList = [];
                while ($row = mysqli_fetch_object($resource) ) {
                    array_push($ordersList, new EntityOrder($row->id, $row->mobileId, $row->clientName, $row->address, $row->phoneNumber, $row->date, $row->shipFee, $row->VAT, $row->totalCost, $row->paymentStatus));
                }
                return $ordersList;
            } else {
                die ($errorMessage);
            }
            mysqli_close($connect);
        }
    }

    public function insertOrder ($SQLcmd, $errorMessage) {
        $connect = mysqli_connect($server, $user, $pass);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            mysqli_select_db($connect, $database);
            print '<br><font size="4" color="blue">';
            if (mysqli_query($connect, $query)){
                print "Insert into $database was successful!</font>";
            } else {
                print "Insert order into $database failed!</font>";
            } 
            mysqli_close ($connect);
        }
        $table_name = 'Order';
        $query = "INSERT INTO $table_name VALUES ('0','$Item','$Cost','$Weight','$Quantity')";
        
    }
}  

?>