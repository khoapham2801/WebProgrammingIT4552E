<?php
include_once(__DIR__ . "/../controller/OrderController.php");

$orderController = new OrderController();
$id = $_GET["id"];
$data = $orderController->getOrderById($id);

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

$data_utf8 = super_encode_utf8($data);
$data_encode = json_encode($data_utf8, JSON_FORCE_OBJECT);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm Order</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
  <link rel="stylesheet" href="../../assets/css/gg.css" />
  <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />
  <link rel="stylesheet" href="../../assets/css/layout.css?nocache=true" />
  <script type="text/javascript">
    var orderObj = JSON.parse('<?= $data_encode; ?>');
  </script>
  <link rel="stylesheet" href="../../assets/css/pages/order-confirm.css?nocache=true" />
  <script src="../../assets/js/shitty.bundle.js" defer></script>
  <script src="../../assets/js/components.js?nocache=true" defer></script>
  <script src="../../assets/js/layout.js?nocache=true" defer></script>
  <script src="../../assets/js/pages/order-confirm.js" defer></script>
</head>

<body>
  <div class="navbar">
    <div class="search-and-logo">
      <div class="search" style="visibility: hidden">
        <i class="gg-search"></i>
      </div>
      <div class="logo d-flex align-center">
        <a href="index.php"> LKK Mobile Shop </a>
      </div>
    </div>
    <div class="navbar-items">
      <a href="index.php" class="navbar-item">Homepage</a>
      <a href="#" onclick="OnClickAboutUs()" class="navbar-item">About Us</a>
    </div>
    <div class="shopping-cart" style="visibility: hidden">
      <i class="gg-shopping-cart"></i>
    </div>
  </div>
  <!-- <div class="main-content-wrapper"> -->
  <div class="main-content">
    <div class="order-number">
      <div class="d-flex justify-center align-center mb-5" style="height: 3rem; margin: 0px">
        <span><strong style="color: green; font-size: larger">Thank you! Your order has been received!</strong></span>
      </div>
      <div class="d-flex justify-center align-center mb-5" style="height: 3rem">
        <span><strong>ORDER NO:</strong><i class="txt-order-no"></i></span>
      </div>
    </div>
    <div class="order-info">
      <div class="order-table-info">
        <h4>YOUR ORDER</h4>
        <table class="table w-100">
          <thead>
            <tr>
              <td class="w-15">Image</td>
              <td class="w-50">Product name</td>
              <td>Quantity</td>
              <td>Total Cost</td>
            </tr>
          </thead>
          <tbody>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
      <div class="billing-info">
        <h4>BILLING DETAILS</h4>
        <div class="billing-info-line">
          <span class="info">NAME: </span>
          <span class='txt-name'></span>
        </div>
        <div class="billing-info-line">
          <span class="info">EMAIL: </span>
          <span class='txt-email'></span>
        </div>
        <div class="billing-info-line">
          <span class="info">PHONE NUMBER: </span>
          <span class='txt-phone'></span>
        </div>
        <div class="billing-info-line">
          <span class="info">ADDRESS: </span>
          <span class='txt-address'></span>
        </div>
        <div class="billing-info-line">
          <span class="info">DATE ORDER: </span>
          <span class='txt-date-order'></span>
        </div>
        <div class="billing-info-line">
          <span class="info">DATE RECEIVE: </span>
          <span class='txt-date-receive'></span>
        </div>
      </div>
    </div>
    <div style="display: grid; justify-content: center">
      <button class="confirm-orderdtl-btn btn btn-warning" onclick="OnClickConfirmOrderDtl()">
        Confirm
      </button>
    </div>
  </div>
  <!-- Site footer -->
  <div class="footer-wrapper">
    <div class="footer-content">
      <div class="about-content">
        <h6>About us</h6>
        <p class="text-justify">LKK Mobile Shop</p>
        <br />
        <p class="text-justify">
          We provide the best flagships and smartphones from top branches in
          the world with the best price.
        </p>
      </div>
      <div class="right-content">
        <div class="categories-content">
          <h6>Categories</h6>
          <li>Iphone</li>
          <li>Samsung</li>
          <li>Xiaomi</li>
          <li>Oppo</li>
          <li>Realme</li>
          <li>Vivo</li>
          <li>Vsmart</li>
        </div>
        <div class="quicklinks-content">
          <h6>Quick links</h6>
          <li>Homepage</li>
          <li>Checkout</li>
        </div>
      </div>
    </div>
  </div>
  <small>Copyright © 2021 LKK Mobile Shop. All Rights Reserved</small>
  <!-- </div> -->
  <div class="scroll-top-btn">
    <i class="gg-chevron-double-up"></i>
  </div>
</body>

</html>