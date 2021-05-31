<?php
  session_start();
  include_once(__DIR__. "/../controller/MobileController.php");

  $controller = new MobileController();
  $id = $_GET["id"];
  $id = substr($id, 3);
  $data = $controller -> getMobileById($id);

  function super_encode_utf8($var,$deep=TRUE){
    if(is_array($var)){
        foreach($var as $key => $value){
            if($deep){
                $var[$key] = super_encode_utf8($value,$deep);
            }elseif(!is_array($value) && !is_object($value) && !mb_detect_encoding($value,'utf-8',true)){
                 $var[$key] = utf8_encode($var);
            }
        }
        return $var;
    }elseif(is_object($var)){
        foreach($var as $key => $value){
            if($deep){
                $var->$key = super_encode_utf8($value,$deep);
            }elseif(!is_array($value) && !is_object($value) && !mb_detect_encoding($value,'utf-8',true)){
                 $var->$key = utf8_encode($var);
            }
        }
        return $var;
    }else{
        return (!mb_detect_encoding($var,'utf-8',true))?utf8_encode($var):$var;
    }
}

  $data_utf8 = super_encode_utf8($data);
  $data_encode = json_encode($data_utf8,JSON_FORCE_OBJECT);
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mobile Store</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link rel="stylesheet" href="../../assets/css/gg.css" />
    <!-- <link rel="stylesheet" href="assets/css/calculated.css"> -->
    <link rel="stylesheet" href="../../assets/css/layout.css" />
    <link rel="stylesheet" href="../../assets/css/pages/product-details.css" />
    <script src="../../assets/js/shitty.bundle.js" defer></script>
    <script src="../../assets/js/calculate-style.js" defer></script>
    <script src="../../assets/js/components.js" defer></script>
    <script src="../../assets/js/layout.js" defer></script>
    <script type="text/javascript">
      var mobileObj = JSON.parse('<?= $data_encode; ?>');
    </script>
    <script src="../../assets/js/pages/product-details.js" defer></script>
  </head>
  <body>
    <div class="navbar-placeholder"></div>
    <div class="navbar">
      <div class="logo d-flex justify-center align-center">
        <a href="index.html"> LKK Mobile Store </a>
      </div>
      <div class="navbar-items">
        <a href="javascript:;" class="navbar-item">Products</a>
        <a href="javascript:;" class="navbar-item">Blog</a>
        <a href="javascript:;" class="navbar-item">About Us</a>
      </div>
      <div class="shopping-cart">
        <i class="gg-shopping-cart"></i>
      </div>
    </div>
    <div class="background"></div>
    <div class="main-content-wrapper">
      <div class="main-content">
        <div class="product-wrapper">
          <div class="slideshow">
            <div class="slide-list">
              <div class="slide">
                <img src="<?php echo $data->img;?>"/>
              </div>
              <div class="slide active">
                <img src="<?php echo $data->img;?>"/>
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
            <h2 class="product-title"><?php echo $data ->name;?></h2>
            <span class="product-price"><?php echo $data ->price;?></span>
            <div class="product-options">
              <select name="" id="">
                <option value="">-- Select Color --</option>
                <option value="">Black</option>
                <option value="">White</option>
              </select>
              <select name="" id="">
                <option value="">-- Select storage size --</option>
                <option value="">64Gb</option>
                <option value="">128Gb</option>
                <option value="">512Gb</option>
              </select>
            </div>
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
                  <td><?php echo $data ->platform;?></td>
                </tr>
                <tr>
                  <td>Chip</td>
                  <td><?php echo $data ->chip;?></td>
                </tr>
                <tr>
                  <td>Front Camera</td>
                  <td><?php echo $data ->front_camera;?></td>
                </tr>
                <tr>
                  <td>Rear Camera</td>
                  <td><?php echo $data ->rear_camera;?></td>
                </tr>
                <tr>
                  <td>Screen</td>
                  <td><?php echo $data ->screen;?></td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td><?php echo $data ->memory;?></td>
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
      <div class="footer">
        <span>
          <small
            >Copyright &copy; 2021 LKK Mobile Store. All Rights Reserved</small
          >
        </span>
      </div>
    </div>
    <div class="scroll-top-btn">
      <i class="gg-chevron-double-up"></i>
    </div>
    <div class="cart-sidebar-wrapper modal-wrapper">
      <div class="modal-backdrop"></div>
      <div class="cart-sidebar modal">
        <div class="modal-body">{{body}}</div>
      </div>
    </div>
  </body>
</html>
