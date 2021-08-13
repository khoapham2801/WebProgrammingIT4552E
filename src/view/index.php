<?php

include_once(__DIR__ . "/../controller/MobileController.php");
include_once(__DIR__ . "/../controller/BrandController.php");

$mobileController = new MobileController();
$brandController = new BrandController();

$mobiles = $mobileController->getALLMobiles();
$brands  = $brandController->getAllBrands();

function super_encode_utf8($var, $deep = TRUE)
{
  if (is_array($var)) {
    foreach ($var as $key => $value) {
      if ($deep) {
        $var[$key] = super_encode_utf8($value, $deep);
      } elseif (!is_array($value) && !is_object($value) && !mb_detect_encoding($value, 'utf-8', true)) {
        $var[$key] = utf8_encode($var);
      }
    }
    return $var;
  } elseif (is_object($var)) {
    foreach ($var as $key => $value) {
      if ($deep) {
        $var->$key = super_encode_utf8($value, $deep);
      } elseif (!is_array($value) && !is_object($value) && !mb_detect_encoding($value, 'utf-8', true)) {
        $var->$key = utf8_encode($var);
      }
    }
    return $var;
  } else {
    return (!mb_detect_encoding($var, 'utf-8', true)) ? utf8_encode($var) : $var;
  }
}

$mobiles_utf8 = super_encode_utf8($mobiles);
$mobiles_encode = json_encode($mobiles_utf8, JSON_FORCE_OBJECT);
//print(gettype($data));
//print(json_last_error());
//print(gettype($data_encode));
//print($brands_encode);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Homepage</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
  <link rel="stylesheet" href="../../assets/css/gg.css" />
  <link rel="stylesheet" href="../../assets/css/core.css" />
  <link rel="stylesheet" href="../../assets/css/layout.css" />
  <link href="https://css.gg/search.css" rel="stylesheet" />
  <link href="https://css.gg/user.css" rel="stylesheet" />
  <link rel="stylesheet" href="../../assets/css/pages/shopping-list.css" />
  <script type="text/javascript">
    var mobiles = JSON.parse('<?= $mobiles_encode; ?>');
    var brands = JSON.parse('<?= $brands; ?>');
  </script>
  <script src="../../assets/js/shitty.bundle.js" defer></script>
  <script src="../../assets/js/components.js" defer></script>
  <script src="../../assets/js/layout.js" defer></script>
  <script src="../../assets/js/pages/shopping-list.js" defer></script>
</head>

<body>
  <div class="navbar-placeholder">
    <div class="shopnow-btn">SHOP NOW!</div>
  </div>
  <div class="navbar">
    <div class="search-and-logo">
      <div class="search">
        <i class="gg-search"></i>
      </div>
      <div class="logo d-flex align-center">
        <a href="index.php"> LKK Mobile Shop </a>
      </div>
    </div>
    <div class="navbar-items">
      <a href="index.php" class="navbar-item">Homepage</a>
      <a onclick="OnClickAboutUs()" class="navbar-item">About Us</a>
    </div>
    <div class="navbar-icons">
      <div class="user-indicator">
        <div class="user-icon">
          <i class="gg-user">
            <div class="user" style="padding-left: 15px; font-style: normal;">
              User
            </div>
          </i>
        </div>
        <div class="dropdown-content">
          <a href="register-user.php">Sign up new account</a>
          <a href="index.php">Log out</a>
          <a href="login-user.php">Switch account</a>
        </div>
      </div>
      <div class="shopping-cart-icon">
        <i class="gg-shopping-cart"></i>
      </div>
    </div>
  </div>
  <div class="background"></div>
  <div class="main-content-wrapper">
    <div class="main-content">
      <div class="d-flex brand-logo-category-container">
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="iphone" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/iphone.png">
            </a>
          </div>
        </div>
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="oppo" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/oppo.png">
            </a>
          </div>
        </div>
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="samsung" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/samsung.png">
            </a>
          </div>
        </div>
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="realme" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/realme.jpg">
            </a>
          </div>
        </div>
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="vivo" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/vivo.png">
            </a>
          </div>
        </div>
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="vsmart" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/vsmart.png">
            </a>
          </div>
        </div>
        <div class="brand-logo-container">
          <div class="brand-logo-bounder">
            <a id="xiaomi" onclick="onclickBrand(id)">
              <img class="brand-logo" src="../../assets/images/BrandLogo/xiaomi.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center mt-5" style="margin-top: 20px;">
        <span class="main-content-title"> Products </span>
      </div>
      <div class="product-list" id="product-list"></div>
      <div class="pagination" id="pagination">
      </div>
    </div>
  </div>
  <!-- Site footer -->
  <div class="footer-wrapper">
    <div class="footer-content">
      <div class="left-content">
        <div class="about-content">
          <h6>About us</h6>
          <p class="text-justify">LKK Mobile Shop</p>
          <br />
          <p class="text-justify">
            We provide the best flagships and smartphones from top branches in
            the world with the best price.
          </p>
        </div>
        <div class="maps-wrapper">
          <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.689034814013!2d105.84475154867548!3d21.005098736993332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad440e32b4d5%3A0x5f05cb80b7eae7db!2zQsOhY2ggS2hvYSBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1628743278604!5m2!1svi!2s" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
      <div class="right-content">
        <h6>Quick links</h6>
        <li><a href="index.php">Homepage</a></li>
        <li><a href="checkout.php">Checkout</a></li>
        <li> <a href="login.php">Login (for admin only)</a></li>
      </div>
    </div>
  </div>
  <small>Copyright © 2021 LKK Mobile Shop. All Rights Reserved</small>

  <div class="scroll-top-btn">
    <i class="gg-chevron-double-up"></i>
  </div>
  <div class="search-sidebar-wrapper modal-wrapper">
    <div class="modal-backdrop"></div>
    <div class="search-sidebar modal">
      <div class="modal-body">

        {{body}}
      </div>
    </div>
  </div>

  <div class="cart-sidebar-wrapper modal-wrapper">
    <div class="modal-backdrop"></div>
    <div class="cart-sidebar modal">
      <div class="modal-body">

        {{body}}
      </div>
    </div>
  </div>

  <div class="confirm-modal-wrapper modal-wrapper">
    <div class="modal-backdrop"></div>
    <div class="confirm-modal modal">
      <div class="modal-header">
        <span class="modal-title">{{title | uppercase}}</span>
        <span class="close">
          <i class="gg-close"></i>
        </span>
      </div>
      <div class="modal-body">

        {{body}}
      </div>
      <div class="modal-footer">{{footer}}</div>
    </div>
  </div>
</body>

</html>