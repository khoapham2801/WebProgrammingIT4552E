<?php
include_once("EntityMobile.php"); 

class ModelMobile {  
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
                $mobileList = [];
                while ($row = mysqli_fetch_object($resource) ) {
                    array_push($mobileList, new EntityMobile($row->id, $row->brandId, $row->name, $row->platform, $row->chip, $row->rear_camera, $row->front_camera, $row->memory, $row->price, $row->screen, $row->discount, $row->img));
                }
                return $mobileList;
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