<?php 
include_once(__DIR__."/../model/ModelOrder.php");  
  
class OrderController {  
    public $modelOrder;   

    public function __construct()  
    {  
        $this -> modelOrder = new ModelOrder();  
    }   

    public function insertOrder($name, $email, $address, $phone, $totalCost) {
        $date   = new DateTime(); //this returns the current date time
        $date = $date -> format('d-m-Y');
        $orderId = $this -> modelOrder -> insertOrderToDB($name, $email, $address, $phone, $date, $totalCost);
        return $orderId;
    }

    public function getOrderById($id) {
        return $this -> modelOrder -> getOrderByIdFromDB($id);
    }

    public function getAllOrders() {
        return $this -> modelOrder -> getAllOrdersFromDB();
    }
}   

?>
