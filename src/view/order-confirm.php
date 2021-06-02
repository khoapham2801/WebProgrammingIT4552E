<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirm Order</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link rel="stylesheet" href="../../assets/css/gg.css" />
    <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />
    <link rel="stylesheet" href="../../assets/css/layout.css?nocache=true" />
    <link
      rel="stylesheet"
      href="../../assets/css/pages/order-confirm.css?nocache=true"
    />
    <script src="../../assets/js/shitty.bundle.js" defer></script>
    <script src="../../assets/js/components.js?nocache=true" defer></script>
    <script src="../../assets/js/layout.js?nocache=true" defer></script>
  </head>
  <body>
    <div class="navbar">
      <div class="search-and-logo">
        <div class="search" style="visibility: hidden">
          <i class="gg-search"></i>
        </div>
        <div class="logo d-flex align-center">
          <a href="index.html"> LKK Mobile Shop </a>
        </div>
      </div>
      <div class="navbar-items">
        <a href="index.html" class="navbar-item">Homepage</a>
        <a href="#" onclick="OnClickAboutUs()" class="navbar-item">About Us</a>
      </div>
      <div class="shopping-cart" style="visibility: hidden">
        <i class="gg-shopping-cart"></i>
      </div>
    </div>
    <!-- <div class="main-content-wrapper"> -->
    <div class="main-content">
      <div class="order-number">
        <div
          class="d-flex justify-center align-center mb-5"
          style="height: 3rem; margin: 0px"
        >
          <span
            ><strong style="color: green; font-size: larger"
              >Thank you! Your order has been received!</strong
            ></span
          >
        </div>
        <div
          class="d-flex justify-center align-center mb-5"
          style="height: 3rem"
        >
          <span><strong>ORDER NO:</strong> <i>M12345</i></span>
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
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="as as-1-1">
                    <div>
                      <img src="assets/images/product-1.jpg" />
                    </div>
                  </div>
                </td>
                <td>いけばな</td>
                <td>3</td>
                <td>30 chaos</td>
              </tr>
              <tr>
                <td>
                  <div class="as as-1-1">
                    <div>
                      <img src="assets/images/product-2.jpg" />
                    </div>
                  </div>
                </td>
                <td>わたしたち</td>
                <td>2</td>
                <td>20 chaos</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td style="border-left: none"></td>
                <td style="border-left: none"></td>
                <td>50 chaos</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="billing-info">
          <h4>BILLING DETAILS</h4>
          <div class="billing-info-line">
            <span class="info">FIRST NAME: </span>
            <span>Khoa</span>
          </div>
          <div class="billing-info-line">
            <span class="info">LAST NAME: </span>
            <span>Pham</span>
          </div>
          <div class="billing-info-line">
            <span class="info">PHONE NUMBER: </span>
            <span>0831231256</span>
          </div>
          <div class="billing-info-line">
            <span class="info">ADDRESS: </span>
            <span>Abbey Road</span>
          </div>
          <div class="billing-info-line">
            <span class="info">CITY: </span>
            <span>London</span>
          </div>
          <div class="billing-info-line">
            <span class="info">COUNTRY: </span>
            <span>England</span>
          </div>
          <div class="billing-info-line">
            <span class="info">POSTAL CODE: </span>
            <span>555aa</span>
          </div>
        </div>
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
