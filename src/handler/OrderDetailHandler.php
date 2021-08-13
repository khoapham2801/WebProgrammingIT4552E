<?php 
    include_once("../controller/OrderDetailController.php"); 

    $orderId = $_POST['orderId'];
    $mobileId = $_POST['mobileId'];
    $quantity = $_POST['quantity'];
    $tableInfo = $_POST['tableInfo'];
    $email = $_POST['email'];

    $orderDetailController = new OrderDetailController();

    return $orderDetailController -> insertOrderDetail($orderId, $mobileId, $quantity, $tableInfo, $email);
?>
