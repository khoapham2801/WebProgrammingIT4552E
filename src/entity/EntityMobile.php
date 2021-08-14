<?php
class EntityMobile { 
    public $id;
    public $brandId;  
    public $name;
    public $platform;
    public $chip;  
    public $rear_camera;  
    public $front_camera;
    public $memory;
    public $price;  
    public $screen;  
    public $discount;
    public $img;  

    public function __construct($id, $brandId, $name, $platform, $chip, $rear_camera, $front_camera, $memory, $price, $screen, $discount, $img)
    {
        $this->id = $id;
        $this->brandId = $brandId;
        $this->name = $name;
        $this->platform = $platform;
        $this->chip = $chip;
        $this->rear_camera = $rear_camera;
        $this->front_camera = $front_camera;
        $this->memory = $memory;
        $this->price = $price;
        $this->screen = $screen;
        $this->discount = $discount;
        $this->img = $img;
    }
    
}  
?>