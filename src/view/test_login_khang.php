<?php 
    include_once(__DIR__."/../../src/controller/AccountController.php");


    $accountController = new AccountController();


    $accounts = $accountController -> getAllAccounts();
    
   
    //print($accounts);


?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Sign In</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link rel="stylesheet" href="../../assets/css/gg.css" />
    <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />
    <link
      rel="stylesheet"
      href="../../assets/css/pages/login.css?nocache=true"
    />
    <script type="text/javascript">
    	var accounts = JSON.parse('<?= $accounts; ?>');
    	//alert(accounts[0].pwd);
    </script>
    <script src="../../assets/js/shitty.bundle.js" defer></script>
    <script src="../../assets/js/components.js?nocache=true" defer></script>
    <script src="../../assets/js/pages/login.js?nocache=true" defer></script>
  </head>
  <body>
    <div class="main-content">
      <div class="login-form-wrapper">
        <div class="login-form">
          <span style="font-size: 2rem">Sign In</span>
          <form>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" name ="usn" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="pwd" />
            </div>
            <div class="login-form-footer">
              <!-- <div class="remember-me">
                <input id="remember-me-checkbox" type="checkbox" />
                <label for="remember-me-checkbox"> Remember me</label>
              </div> -->
              <!-- <div class="forgot-password">
                <a href="javascript:;">Forgot your password?</a>
              </div> -->
            </div>
            <button onclick="OnClickLogin()" class="btn login-btn">
              Login
            </button>
          </form>
        </div>
        <div class="login-side-image"></div>
      </div>
    </div>
  </body>
</html>

