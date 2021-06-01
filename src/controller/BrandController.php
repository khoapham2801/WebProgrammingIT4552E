<?php 
include_once(__DIR__."/../model/ModelBrand.php");  
  
class BrandController {  
    public $modelBrand;   

    public function __construct()  
    {  
        $this -> modelBrand = new ModelBrand();  
    }   

    public function init()  
    {  
        
    }  
    public function getAllBrands(){
    	$brandList = $this -> modelBrand -> getAllBrands();
        return $brandList;
    }
}  

?>
