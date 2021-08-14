<?php
class EntityAccount {  
    public $id;  
    public $usn;  
    public $pwd;  
    public $role;
  
    public function __construct($id, $usn, $pwd, $role)  
    {  
        $this->id = $id;  
        $this->usn = $usn;  
        $this->pwd = $pwd;  
        $this->role = $role;
    }  
}  
?>