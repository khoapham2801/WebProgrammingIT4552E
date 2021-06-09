<?php 
include_once(__DIR__."/../model/ModelOrderDetail.php");  
  
class OrderDetailController {  
    public $modelOrderDetail;   

    public function __construct()  
    {  
        $this -> modelOrderDetail = new ModelOrderDetail();  
    }   

    public function insertOrderDetail($orderId, $mobileId, $quantity) {
        $orderId = $this -> modelOrderDetail -> insertOrderDetailToDB($orderId, $mobileId, $quantity);
        return $orderId;
    }

    public function getOrderDetailByOrderId($id) {
        return $this -> modelOrderDetail -> getOrderDetailByOrderIdFromDB($id);
    }
}   

?>
