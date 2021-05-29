<?php 
include_once("../model/ModelBrand.php");  
  
class Controller {  
    public $modelMobile;   

    public function __construct()  
    {  
        $this->model = new ModelBrand();  
    }   

    public function init()  
    {  
        
    }  
}  

?>
