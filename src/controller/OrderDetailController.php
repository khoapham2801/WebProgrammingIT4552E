<?php 
include_once(__DIR__."/../model/ModelOrderDetail.php");  
  
class OrderDetailController {  
    public $modelOrder;   

    public function __construct()  
    {  
        $this -> modelOrder = new ModelOrder();  
    }   

    public function insertOrderDetail($orderId, $mobileId, $quantity) {
        $orderId = $this -> modelOrder -> insertOrderDetailToDB($orderId, $mobileId, $quantity);
        return $orderId;
    }

    public function getOrderDetailByOrderId($id) {
        return $this -> modelOrder -> getOrderDetailByOrderIdFromDB($id);
    }
}   

?>
