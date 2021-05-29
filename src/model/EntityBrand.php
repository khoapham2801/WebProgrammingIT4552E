<?php
class EntityBrand {  
    public $id;  
    public $name;  
    public $img;  
  
    public function __construct($id, $name, $img)  
    {  
        $this->id = $id;  
        $this->name = $name;  
        $this->img = $img;  
    }  
}  
?>