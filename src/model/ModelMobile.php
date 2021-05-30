<?php
include_once("EntityMobile.php"); 

class ModelMobile {  
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

    public function getAllMobiles()  
    {  
        $SQLcmd = "SELECT * FROM mobile";
        $errorMessage = "Can not get all mobiles";
        return $this -> getAPI ($SQLcmd, $errorMessage);
    }  
  
    public function getMobileById($id)  
    {  
        $SQLcmd = "SELECT * FROM mobile WHERE (mobile.id = '$id')";
        $errorMessage = "Cannot get the specific mobile";
        return $this -> getAPI ($SQLcmd, $errorMessage)[0];
    } 
    
    public function getMobilesByBrand($brand)  
    {  
        $SQLcmd = $SQLcmd = "SELECT * FROM mobile, brand 
        WHERE (mobile.brandId = brand.id AND brand.name = '$brand')";
        $errorMessage = "Cannot get the mobiles of the brand $brand";
        return $this -> getAPI ($SQLcmd, $errorMessage);
    }  
}  

?>