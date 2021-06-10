<?php 
    include_once(__DIR__."/MobileController.php"); 

    $mobileId = $_POST['mobileId'];

    $mobileController = new MobileController();

    return $mobileController -> getMobileById($mobileId);
?>
