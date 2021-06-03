<?php 
include_once(__DIR__."/../model/ModelMobile.php");  
  
class MobileController {  
    public $modelMobile;   

    public function __construct()  
    {  
        $this -> modelMobile = new ModelMobile();  
    }   

    public function getAllMobiles()  
    {  
        $mobileList = $this -> modelMobile -> getAllMobiles();
        return $mobileList;
    }  

    public function getMobileById($id) {
        $mobile = $this -> modelMobile -> getMobileById($id);
        return $mobile;
    }

    public function insertMobile($brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img) {
        return $this -> modelMobile -> inSertMobileToDB($brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img);
    }

    public function updateMobileById($id, $brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img) {
        return $this -> modelMobile -> updateMobileByIdToDB($id, $brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img);
    }

    public function deleteMobile($id) {
        return $this -> modelMobile -> deleteMobileInDB($id);
    }
}  

?>
