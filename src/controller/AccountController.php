<?php 
include_once(__DIR__."/../model/ModelAccount.php");  
  
class AccountController {  
    public $modelAccount;   

    public function __construct()  
    {  
        $this -> modelAccount = new ModelAccount();  
    }   

    public function getAllAccounts(){
    	$accList = $this -> modelAccount -> getAllAccounts();
        return $accList;
    }
}  

?>
