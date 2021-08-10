<?php

class MailService {
    public function sendingEmail($tableInfo, $mailto) {
        // Set content-type header for sending HTML email 
        $headers = "MIME-Version: 1.0" . "\r\n"; 
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
        
        $subject = 'Thank you for your purchase from LLK Mobile Shop';
        $htmlContent = ' 
        <html>
        <head>
            <style>
            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            td,th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            tr:nth-child(even) {
                background-color: #dddddd;
            }
            .w-100 {
                width: 100%;
            }
            .w-15 {
                width: 15%;
            }
            .w-50 {
                width: 50%;
            }
            thead {
                background-color: #f7f7f7;
            }
            tfoot {
                background-color: #f7f7f7;
            }
            </style>
        </head>
        <body> 
            <h2>Hello,</h2>
            <h2>Thank you for buying mobile phone from LKK Mobile Shop.</h2><br>
            <div><strong>Order detail:</strong></div>' 
            . $tableInfo . '
        </body> 
        </html>'; 

        echo ($mailto . $subject . $htmlContent);

        if (mail($mailto, $subject, $htmlContent, $headers)) {
            echo 'Your mail has been sent successfully.';
        } else {
            echo 'Unable to send email.';
        }
    }
}
    
?>