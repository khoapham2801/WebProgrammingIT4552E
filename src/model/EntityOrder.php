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
        $this->mobileId = $mobileId;  
        $this->clientName = $clientName; 
        $this->address = $address; 
        $this->phoneNumber = $phoneNumber;
        $this->date = $date; 
        $this->shipFee = $shipFee;  
        $this->VAT = $VAT; 
        $this->totalCost = $totalCost;
        $this->paymentStatus = $paymentStatus;
    } 
}  
?>