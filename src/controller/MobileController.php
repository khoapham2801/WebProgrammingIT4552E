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
}  

?>
