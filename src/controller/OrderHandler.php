<?php 
    include_once(__DIR__."/OrderController.php"); 

    //$data = file_get_contents('php://input');
    
    //print_r($data);

    //$data = json_decode($data);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $totalCost = $_POST['totalCost'];
    
    $orderController = new OrderController();

    return $orderController -> insertOrder($name, $email, $address, $phone, $totalCost);
?>
