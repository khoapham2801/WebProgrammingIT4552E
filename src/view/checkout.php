<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Checkout</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link rel="stylesheet" href="../../assets/css/gg.css" />
    <link rel="stylesheet" href="../../assets/css/core.css?nocache=true" />
    <link rel="stylesheet" href="../../assets/css/layout.css?nocache=true" />
    <link
      rel="stylesheet"
      href="../../assets/css/pages/checkout.css?nocache=true"
    />
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
          <a href=""> LKK Mobile Shop </a>
        </div>
      </div>
      <div class="navbar-items">
        <a href="/" class="navbar-item">Homepage</a>
        <a href="#" onclick="OnClickAboutUs()" class="navbar-item">About Us</a>
      </div>
      <div class="shopping-cart">
        <i class="gg-shopping-cart"></i>
      </div>
    </div>
    <div class="background"></div>
    <div class="main-content-wrapper">
      <div class="main-content">
        <div class="cart-summary">
          <div
            class="d-flex justify-center align-center mb-5"
            style="height: 3rem"
          >
            <span><strong>Your Items</strong></span>
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
              <!-- <tr>
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
              </tr> -->
            </tbody>
            <tfoot class="tbl-footer">
                <!-- <tr>
                  <td></td>
                  <td style="border-left: none"></td>
                  <td style="border-left: none"></td>
                  <td>50 chaos</td>
                </tr> -->
            </tfoot>
          </table>
          <div class="d-flex justify-end">
            <button
              class="place-order-btn btn btn-warning"
              onclick="location.href = 'order-confirm.html';"
            >
              Place Order
              <i class="gg-arrow-right ml-3"></i>
            </button>
          </div>
        </div>
        <div class="customer-info">
          <div
            class="d-flex justify-center align-center mb-5"
            style="height: 3rem"
          >
            <span><strong>Customer Info</strong></span>
          </div>
          <div class="form-group">
            <label>First name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>Last name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>Address</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>Country</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>Postal code</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mt-3">
            <label>Phone</label>
            <input type="text" class="form-control" />
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
    <div class="scroll-top-btn">
      <i class="gg-chevron-double-up"></i>
    </div>
    <div class="cart-sidebar-wrapper modal-wrapper">
      <div class="modal-backdrop"></div>
      <div class="cart-sidebar modal">
        <div class="modal-body">{{body}}</div>
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
        <div class="modal-body">{{body}}</div>
        <div class="modal-footer">{{footer}}</div>
      </div>
    </div>
  </body>
</html>
