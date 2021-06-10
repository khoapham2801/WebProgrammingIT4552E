<?php 
    include_once(__DIR__."/OrderController.php"); 
    $type = $_POST['type'];
    $orderController = new OrderController();

    if ($type == 0) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        $totalCost = $_POST['totalCost'];
        return $orderController -> insertOrder($name, $email, $address, $phone, $totalCost);
    } else {
        $orderId = $_POST['orderId'];
        $orderController -> deleteOrderById($orderId);
    }
?>
