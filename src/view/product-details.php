<?php
session_start();
include_once(__DIR__ . "/../controller/MobileController.php");

$controller = new MobileController();
$id = $_GET["id"];
$id = substr($id, 6);
$data = $controller->getMobileById($id);

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
  <title>Mobile Store</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
  <link rel="stylesheet" href="../../assets/css/gg.css" />
  <link href="https://css.gg/user.css" rel="stylesheet" />
  <!-- <link rel="stylesheet" href="assets/css/calculated.css"> -->
  <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />

  <link rel="stylesheet" href="../../assets/css/layout.css" />
  <link rel="stylesheet" href="../../assets/css/pages/product-details.css" />
  <script src="../../assets/js/shitty.bundle.js" defer></script>
  <script src="../../assets/js/calculate-style.js" defer></script>
  <script src="../../assets/js/components.js?nocache=true" defer></script>
  <script src="../../assets/js/layout.js?nocache=true" defer></script>
  <script type="text/javascript">
    var mobileObj = JSON.parse('<?= $data_encode; ?>');
  </script>
  <script src="../../assets/js/pages/product-details.js" defer></script>
</head>

<body>
  <div class="navbar-placeholder">
    <div class="shopnow-btn">SHOP NOW!</div>
  </div>
  <div class="navbar">
    <div class="search-and-logo">
      <div class="search" style="visibility: hidden;">
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
          <i class="gg-user"></i>
        </div>
        <div class="user" style="padding-left: 5px;">
          User
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
      <div class="product-wrapper">
        <div class="slideshow">
          <div class="slide-list">
            <div class="slide">
              <img src="<?php echo $data->img; ?>" />
            </div>
            <div class="slide active">
              <img src="<?php echo $data->img; ?>" />
            </div>
          </div>
          <div class="slide-control prev">
            <i class="gg-chevron-left"></i>
          </div>
          <div class="slide-control next">
            <i class="gg-chevron-right"></i>
          </div>
          <div class="slide-indicators">
            <div class="slide-indicator active"></div>
            <div class="slide-indicator"></div>
          </div>
        </div>
        <div class="product-details">
          <h2 class="product-title"><?php echo $data->name; ?></h2>
          <span class="product-price" style="padding: 0px; background-color:transparent;"><?php echo number_format($data->price * (100 - $data->discount) / 100); ?></span>
          <span class="product-price" style="text-decoration:line-through; padding: 0px; background-color:transparent;"><?php echo number_format($data->price); ?></span>
          <span class="product-price" style="padding: 0px; background-color:transparent;"><?php echo "(", "-", number_format($data->discount), "%)"; ?></span>
          <div class="d-flex add-to-cart-wrapper">
            <div class="product-quantity">
              <button class="dec-qty">-</button>
              <input id="quantity-mobiles" type="number" value="{{qty}}" min="1" />
              <button class="inc-qty">+</button>
            </div>
            <button onclick="addToCart()" class="add-to-cart">Add to cart</button>
          </div>
          <button onclick="buyNow()" class="buy-now-btn">Buy now</button>
        </div>
        <div class="product-description section mt-5">
          <h2 class="section-title d-flex align-center">
            <i class="gg-math-minus mr-4"></i> Product description
          </h2>
          <div class="section-body collapsible">
            <table>
              <tr>
                <td>Platform</td>
                <td><?php echo $data->platform; ?></td>
              </tr>
              <tr>
                <td>Chip</td>
                <td><?php echo $data->chip; ?></td>
              </tr>
              <tr>
                <td>Front Camera</td>
                <td><?php echo $data->front_camera; ?></td>
              </tr>
              <tr>
                <td>Rear Camera</td>
                <td><?php echo $data->rear_camera; ?></td>
              </tr>
              <tr>
                <td>Screen</td>
                <td><?php echo $data->screen; ?></td>
              </tr>
              <tr>
                <td>Memory</td>
                <td><?php echo $data->memory; ?></td>
              </tr>

            </table>
          </div>
        </div>
        <div class="section">
          <h2 class="section-title d-flex align-center">
            <i class="gg-math-minus mr-4"></i> Customer reviews
          </h2>
          <div class="section-body collapsible">
            <span>This product currently has no reviews</span>
          </div>
        </div>
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