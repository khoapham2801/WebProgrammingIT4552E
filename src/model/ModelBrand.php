<?php
include_once("model/EntityBrand.php");

class ModelBrand {
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
                $brandList = [];
                while ($row = mysqli_fetch_object($resource) ) {
                    array_push($brandList, new EntityBrand($row->id, $row->name, $row->img));
                }
                $jsonString = json_encode($brandList);
                return $jsonString;
            } else {
                die ($errorMessage);
            }
            mysqli_close($connect);
        }
    }

    public function getAllBrands () {
        $SQLcmd = "SELECT * FROM brand";
        $errorMessage = "Can not get all brands";
        return $this -> getAPI ($SQLcmd, $errorMessage);
    }
}

?>