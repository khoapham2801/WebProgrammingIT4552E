<?php
include_once("../entity/EntityAccount.php");

class ModelAccount {
    public function getAPI ($SQLcmd, $errorMessage) {
        $server = 'localhost';
        $user = 'root';
        $pass = '';
        $mydb = 'mobileshopdb';
        $connect = mysqli_connect($server, $user, $pass);
        if (!$connect) {
            die ("Cannot connect to $server using $user");
        } else {
            mysqli_select_db($connect, $mydb);
            if ($resource = mysqli_query($connect, $SQLcmd)){
                $accList = [];
                while ($row = mysqli_fetch_object($resource) ) {
                    array_push($accList, new EntityAccount($row->id, $row->usn, $row->pwd, $row->role));
                }
                $jsonString = json_encode($accList);
                return $jsonString;
            } else {
                die ($errorMessage);
            }
            mysqli_close($connect);
        }
    }

    public function getAllAccounts () {
        $SQLcmd = "SELECT * FROM account";
        $errorMessage = "Can not get all accounts";
        return $this -> getAPI ($SQLcmd, $errorMessage);
    }
}

?>