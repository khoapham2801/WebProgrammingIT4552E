<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Checkout</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
  <link rel="stylesheet" href="../../assets/css/gg.css" />
  <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />
  <link rel="stylesheet" href="../../assets/css/layout.css?nocache=true" />
  <link rel="stylesheet" href="../../assets/css/pages/checkout.css?nocache=true" />
  <script src="../../assets/js/shitty.bundle.js" defer></script>
  <script src="../../assets/js/components.js?nocache=true" defer></script>
  <script src="../../assets/js/layout.js?nocache=true" defer></script>
  <script src="../../assets/js/pages/checkout.js" defer></script>
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
      <div class="cart-summary">
        <div class="d-flex justify-center align-center mb-5" style="height: 3rem">
          <span><strong id="table-title">Your Items</strong></span>
        </div>
        <table class="table w-100">
          <thead>
            <tr>
              <td class="w-15">Image</td>
              <td class="w-50">Product name</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody class="tbl-body">
          </tbody>
          <tfoot class="tbl-footer">
          </tfoot>
        </table>
        <div class="d-flex justify-end">
          <button class="place-order-btn btn btn-warning" onclick="placeOrder()" id="place-order-btn">
            Place Order
            <i class="gg-arrow-right ml-3"></i>
          </button>
        </div>
      </div>
      <div class="customer-info" id="customer-info">
        <div class="d-flex justify-center align-center mb-5" style="height: 3rem">
          <span><strong>Customer Info</strong></span>
        </div>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control txt-name" />
        </div>
        <div class="form-group mt-3">
          <label>Email</label>
          <input type="text" class="form-control txt-email" />
        </div>
        <div class="form-group mt-3">
          <label>Address</label>
          <input type="text" class="form-control txt-address" />
        </div>
        <div class="form-group mt-3">
          <label>Phone</label>
          <input type="text" class="form-control txt-phone" />
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