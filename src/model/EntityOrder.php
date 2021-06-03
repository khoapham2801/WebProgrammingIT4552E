<?php
class EntityOrder {  
    public $id; 
    public $name;
    public $address;
    public $phone;
    public $date;
    public $totalCost;
  
    public function __construct($id, $name, $email, $address, $phone, $date, $totalCost)  
    {  
        $this->id = $id;  
        $this->name = $name; 
        $this->email = $email; 
        $this->address = $address; 
        $this->phone = $phone;
        $this->date = $date; 
        $this->totalCost = $totalCost;
    } 
}  
?>