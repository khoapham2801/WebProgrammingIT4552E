<?php
class EntityOrderDetail {  
    public $id; 
    public $orderId;
    public $mobileId;
    public $quantity;
  
    public function __construct($id, $orderId, $mobileId, $quantity)  
    {  
        $this->id = $id;  
        $this->orderId = $orderId; 
        $this->mobileId = $mobileId; 
        $this->quantity = $quantity; 
    } 
}  
?>