<?php 
// Run this to test
    // include_once("src/model/ModelMobile.php");
    // $model = new ModelMobile();  
    // $data = $model -> getMobilesByBrand("Vsmart"); 
    // print_r($data);

    include_once("src/controller/MobileController.php");

    $controller = new MobileController();
    $data = $controller -> init();
    print_r($data);
?>