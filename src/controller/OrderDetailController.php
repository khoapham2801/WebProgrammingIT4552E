<?php 
include_once(__DIR__."/../model/ModelOrderDetail.php");  
include_once(__DIR__."/../service/MailService.php");

class OrderDetailController {  
    private $modelOrderDetail;   
    private $mailService;

    public function __construct()  
    {  
        $this -> modelOrderDetail = new ModelOrderDetail();  
        $this -> mailService = new MailService();
    }   

    public function insertOrderDetail($orderId, $mobileId, $quantity, $tableInfo, $email) {
        $orderDetailId = -1;
        if ($orderId != -1) {
            $orderDetailId = $this -> modelOrderDetail -> insertOrderDetailToDB($orderId, $mobileId, $quantity);
        }
        if (strcmp($tableInfo, "") !== 0) {
            $this -> mailService -> sendingEmail($tableInfo, $email);
        }
        return $orderDetailId;
    }

    public function getOrderDetailByOrderId($id) {
        return $this -> modelOrderDetail -> getOrderDetailByOrderIdFromDB($id);
    }
}   

?>
