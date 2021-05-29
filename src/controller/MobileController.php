<?php 
include_once("../model/ModelMobile.php");  
  
class Controller {  
    public $modelMobile;   

    public function __construct()  
    {  
        $this->model = new ModelMobile();  
    }   

    public function init()  
    {  
        
    }  
}  

?>
