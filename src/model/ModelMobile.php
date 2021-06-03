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
        $SQLcmd = "SELECT * FROM mobile, brand 
        WHERE (mobile.brandId = brand.id AND brand.name = '$brand')";
        $errorMessage = "Cannot get the mobiles of the brand $brand";
        return $this -> getAPI ($SQLcmd, $errorMessage);
    }  

    public function insertMobileToDB($brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img) {
        $SQLcmd = "INSERT INTO mobile VALUES 
        ('0', '$brandId', '$name', '$platform', '$chip', '$rear_camera', '$front_camera', '$memory', '$price', '$screen', '$discount', '$img')";
        $errorMessage = "Cannot insert mobile to DB";
        return $this -> insertAPI ($SQLcmd, $errorMessage);
    }

    public function updateMobileByIdToDB($id, $brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img) {
        $SQLcmd = "UPDATE mobile 
        SET mobile.brandid = '$brandId', mobile.name = '$name', mobile.platform = '$platform', mobile.chip = '$chip', mobile.rear_camera = '$rear_camera', mobile.front_camera = '$front_camera', mobile.memory = '$memory', mobile.price = '$price', mobile.screen = '$screen', mobile.discount = '$discount', mobile.img = '$img'
        WHERE (mobile.id = '$id')";
        $errorMessage = "Cannot update mobile to DB";
        return $this -> updateAPI ($SQLcmd, $errorMessage);
    }

    public function deleteMobileInDB ($id) {
        $SQLcmd = "DELETE FROM mobile WHERE (mobile.id = '$id')";
        $errorMessage = "Cannot delete mobile in DB";
        return $this -> updateAPI ($SQLcmd, $errorMessage);
    }
}  

?>