<?php 
    include_once(__DIR__."/OrderController.php"); 

    $data = file_get_contents('php://input');
    print_r($data);
    print "hello";
    $data = json_decode($data);
    $name = $data['name'];
    $email = $data['email'];
    $address = $data['address'];
    $phone = $data['phone'];
    $totalCost = $data['totalCost'];

    $orderController = new OrderController();

    $orderController -> insertOrder($name, $email, $address, $phone, $totalCost);
?>
