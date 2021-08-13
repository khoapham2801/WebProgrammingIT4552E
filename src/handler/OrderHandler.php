<?php 
    include_once("../controller/OrderController.php");  

    $orderController = new OrderController();
    $type = $_POST['type'];
    
    if ($type == 0) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        $totalCost = $_POST['totalCost'];
        return $orderController -> insertOrder($name, $email, $address, $phone, $totalCost);
    } else {
        $orderId = $_POST['orderId'];
        $tableInfo = $_POST['tableInfo'];
        $email = $_POST['email'];
        $orderController -> deleteOrderById($orderId, $tableInfo, $email);
    }
?>
