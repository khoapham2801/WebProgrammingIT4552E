<?php
class EntityOrder {  
    public $id; 
    public $mobileId;
    public $clientName;
    public $address;
    public $phoneNumber;
    public $date;
    public $shipFee;
    public $VAT;
    public $totalCost;
    public $paymentStatus;
  
    public function __construct($id, $mobileId, $clientName, $address, $phoneNumber, $date, $shipFee, $VAT, $totalCost, $paymentStatus)  
    {  
        $this->id = $id;  
        $this->name = $name;  
        $this->img = $img;  
    }  
}  
?>