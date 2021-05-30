<?php 
// Run this to test
    // include_once("src/model/ModelMobile.php");
    // $model = new ModelMobile();  
    // $data = $model -> getMobilesByBrand("Vsmart"); 
    // print_r($data);

    include_once("src/controller/MobileController.php");

    $controller = new MobileController();
    $data = $controller -> getALLMobiles();
    print_r($data);

?>
<!-- <!DOCTYPE html>
<body>
	<br>
	<img src="<?php echo $data->img;?>"/>
</body> -->