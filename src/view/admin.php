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
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
  <link rel="stylesheet" href="../../assets/css/gg.css" />
  <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />
  <link rel="stylesheet" href="../../assets/css/layout.css?nocache=true" />
  <link rel="stylesheet" href="../../assets/css/pages/admin-edit.css?nocache=true" />
  <link href="https://css.gg/user.css" rel="stylesheet" />
  <!-- <link href="https://css.gg/pen.css" rel="stylesheet" />
    <link href="https://css.gg/trash.css" rel="stylesheet" /> -->
  <script type="module" async>
    var isLogin = 0;
    isLogin = localStorage.getItem("test");
    console.log(localStorage.getItem("test"));
    if (isLogin == 0) {
      location.replace("login.php");
    }
  </script>
  <script src="../../assets/js/shitty.bundle.js" defer></script>
  <script src="../../assets/js/components.js?nocache=true" defer></script>
  <script src="../../assets/js/layout.js?nocache=true" defer></script>
  <script type="text/javascript">
    var mobiles = JSON.parse('<?= $mobiles_encode; ?>');
    var brands = JSON.parse('<?= $brands; ?>');
  </script>
  <script type="text/javascript" src="../../assets/js/pages/admin.js" defer></script>
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
      <a href="admin.php" class="navbar-item">Manage Product</a>
      <a href="admin-order.php" class="navbar-item">Manage Order</a>
    </div>
    <!-- <div class="navbar-items">
        <a href="/" class="navbar-item">Homepage</a>
        <a href="#" onclick="OnClickAboutUs()" class="navbar-item">About Us</a>
      </div> -->
    <div class="shopping-cart" style="visibility: hidden">
      <i class="gg-shopping-cart"></i>
    </div>
    <div class="admin-icon">
      <i class="gg-user"></i>
      <span style="margin-left: 15px">Admin</span>
    </div>
  </div>
  <div class="edit-wrapper">
    <div class="table-head">
      <h4>Products</h4>
      <button class="addbtn btn btn-warning" onclick="onClickAddBtn()">
        Add new
      </button>
    </div>

    <table class="table w-100">
      <thead>
        <tr>
          <td>Number</td>
          <td class="w-15">Image</td>
          <td class="w-30">Name</td>
          <td>Platform</td>
          <td class="w-15">Chip</td>
          <td>Rear Camera</td>
          <td>Front Camera</td>
          <td>Memory Specs</td>
          <td>Price</td>
          <td>Screen</td>
          <td>Discount</td>
          <td>Edit</td>
          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  <div class="edit-popup-wrapper modal-wrapper">
    <div class="modal-backdrop"></div>
    <div class="edit-popup modal">
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