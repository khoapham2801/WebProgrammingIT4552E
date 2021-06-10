<?php 
    include_once(__DIR__."/OrderDetailController.php"); 

    $orderId = $_POST['orderId'];
    $mobileId = $_POST['mobileId'];
    $quantity = $_POST['quantity'];

    $orderDetailController = new OrderDetailController();

    return $orderDetailController -> insertOrderDetail($orderId, $mobileId, $quantity);
?>
