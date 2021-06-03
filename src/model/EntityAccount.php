<?php
class EntityAccount {  
    public $id;  
    public $usn;  
    public $pwd;  
  
    public function __construct($id, $usn, $pwd)  
    {  
        $this->id = $id;  
        $this->usn = $usn;  
        $this->pwd = $pwd;  
    }  
}  
?>