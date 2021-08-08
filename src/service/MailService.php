<?php

class MailService {
    public function sendingEmail($mailto, $name, $totalCost) {
        $subject = 'Successfully order in LLK Mobile Shop';
        $message = 'Mr/Ms ' . $name . ' have successfully placed an order with total: ' . $totalCost . " VND from LKK mobile shop";
        //echo ($mailto . $subject . $message);
        if (mail($mailto, $subject, $message)) {
            echo 'Your mail has been sent successfully.';
        } else {
            echo 'Unable to send email.';
        }
    }
}
    
?>