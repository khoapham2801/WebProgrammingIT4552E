<?php
class EntityOrder {  
    public $id; 
    public $name;
    public $address;
    public $phone;
    public $date;
    public $totalCost;
  
    public function __construct($id, $name, $address, $phone, $date, $totalCost)  
    {  
        $this->id = $id;  
        $this->name = $name; 
        $this->address = $address; 
        $this->phoneNumber = $phoneNumber;
        $this->date = $date; 
        $this->totalCost = $totalCost;
    } 
}  
?>