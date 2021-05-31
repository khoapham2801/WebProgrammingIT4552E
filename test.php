<?php 
// Run this to test
    // include_once("src/model/ModelMobile.php");
    // $model = new ModelMobile();  
    // $data = $model -> getMobilesByBrand("Vsmart"); 
    // print_r($data);

    include_once("src/controller/MobileController.php");

    $controller = new MobileController();
<<<<<<< HEAD
    $data = $controller -> getAllMobiles();
=======
    $data = $controller -> getALLMobiles();
>>>>>>> 5fa0c20320c965d52a11e3908c09b2264c3269a7
    print_r($data);

?>
<!-- <!DOCTYPE html>
<body>
	<br>
	<img src="<?php echo $data->img;?>"/>
</body> -->