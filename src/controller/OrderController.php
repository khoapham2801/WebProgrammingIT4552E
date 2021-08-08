<?php 
include_once(__DIR__."/../model/ModelOrder.php");  
include_once("../service/MailService.php");

class OrderController {  
    public $modelOrder;   
    private $mailService;

    public function __construct()  
    {  
        $this -> modelOrder = new ModelOrder();  
        $this -> mailService = new MailService();
    }   

    public function insertOrder($name, $email, $address, $phone, $totalCost) {
        $date = new DateTime(); //this returns the current date time
        $date = $date -> format('d-m-Y');
        $orderId = $this -> modelOrder -> insertOrderToDB($name, $email, $address, $phone, $date, $totalCost);
        $this -> mailService -> sendingEmail($email, $name, $totalCost);
        return $orderId;
    }

    public function getOrderById($id) {
        return $this -> modelOrder -> getOrderByIdFromDB($id);
    }

    public function getAllOrders() {
        return $this -> modelOrder -> getAllOrdersFromDB();
    }

    public function deleteOrderById($orderId) {
        return $this -> modelOrder -> deleteOrderById($orderId);
    }
}   

?>
