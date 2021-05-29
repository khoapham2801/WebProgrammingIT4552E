<?php 
// Run this to test
    include_once("src/model/ModelMobile.php");
    $model = new ModelMobile();  
    $data = $model -> getMobilesByBrand("Samsung"); 
    print_r($data);
?>