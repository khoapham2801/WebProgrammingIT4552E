CREATE DATABASE mobileshopdb;

CREATE TABLE mobileshopdb.brand (
  id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  img varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE mobileshopdb.mobile (
  id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  brandId int(11) DEFAULT NULL,
  name varchar(50) DEFAULT NULL,
  platform varchar(255) DEFAULT NULL,
  chip varchar(255) DEFAULT NULL,
  rear_camera varchar(255) DEFAULT NULL,
  front_camera varchar(255) DEFAULT NULL,
  memory varchar(255) DEFAULT NULL,
  price decimal(19, 2) DEFAULT NULL,
  screen decimal(19, 2) DEFAULT NULL,
  discount int(3) DEFAULT NULL,
  img varchar(255) DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (brandId) REFERENCES brand(id)
);

CREATE TABLE mobileshopdb.donhang (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  address varchar(255) DEFAULT NULL,
  phone varchar(255) DEFAULT NULL,
  date varchar(255) DEFAULT NULL,
  totalCost decimal(19, 2) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE mobileshopdb.donhangdetail (
  id int(11) NOT NULL AUTO_INCREMENT,
  donhangId int(11) DEFAULT NULL,
  mobileId int(11) DEFAULT NULL,
  quantity int(11) DEFAULT NULL,
  FOREIGN KEY (donhangId) REFERENCES donhang(id),
  FOREIGN KEY (mobileId) REFERENCES mobile(id),
  PRIMARY KEY (id)
);

CREATE TABLE mobileshopdb.account (
  id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  usn varchar(50) DEFAULT NULL,
  pwd varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO mobileshopdb.account (usn, pwd) VALUES ('admin','admin');

INSERT INTO mobileshopdb.brand (name, img) VALUES
('Xiaomi','assets/images/BrandLogo/xiaomi.png'),
('Samsung','assets/images/BrandLogo/samsung.png'),
('Oppo','assets/images/BrandLogo/oppo.png'),
('Realme','assets/images/BrandLogo/realme.png'),
('Vivo','assets/images/BrandLogo/vivo.png'),
('Vsmart','assets/images/BrandLogo/vsmart.png'),
('Iphone','assets/images/BrandLogo/iphone.png');

INSERT INTO mobileshopdb.mobile (brandId,name,platform,chip,rear_camera,front_camera,memory,price,screen,discount,img) VALUES
(1,'Xiaomi Redmi Note 10','Android 11','Snapdragon 678','48 MP','13 MP','128G',5490000,6.5,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-redmi-note-10_1.jpg'),
(1,'Xiaomi Redmi Note 10 Pro 8GB','Android 11','Snapdragon 732G','108 MP','16 MP','128G',6490000,6.5,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-redmi-note-10-pro_2_.png'),
(1,'Xiaomi POCO X3 NFC 128GB','Android 11','Snapdragon 732G','64 MP','20 MP','128G',6990000,6.5,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-poco-x3_2_.jpg'),
(1,'Xiaomi Mi 11 5G','Android 11','Qualcomm SM8350 Snapdragon 888','108 MP','20 MP','256G',21990000,6.5,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-mi-11-xanhduong-600x600-600x600.jpg'),
(1,'Xiaomi Mi 10T Pro 5G 8GB 128GB','Android 11','Qualcomm SM8250 Snapdragon 865','108 MP','20 MP','128G',11990000,6.5,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-mi-10t-pro_2__3.jpg'),
(1,'Xiaomi POCO X3 Pro','Android 11','Snapdragon 860','48MP + 8MP + 2MP + 2MP','20MP','256G',15990000,6.5,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-poco-x3-pro-2.jpg'),
(1,'Xiaomi Redmi Note 10 4GB','Android 11','Snapdragon 678','48 MP','13 MP','64G',4690000,6.5,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-redmi-note-10_1_2.jpg'),
(1,'Xiaomi Mi 10T Pro 5G','Android 11','Qualcomm SM8250 Snapdragon 865','108 MP','20 MP','256G',12990000,6.5,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-mi-10t-pro_2_.jpg'),
(1,'Xiaomi Redmi 9A','Android 10','MediaTek Helio G25','13MP','5MP','32G',1990000,6.4,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/redmi_9a_0005_background.jpg'),
(1,'Xiaomi Redmi 9 4G','Android 10','MediaTek Helio G80','13 MP','5MP','64G',2990000,6.6,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/redmi_9_0002_layer_1_2_2.jpg'),
(1,'Xiaomi Redmi Note 10 Pro 6GB','Android 11','Snapdragon 732G','108 MP','16 MP','128G',7990000,6.5,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-redmi-note-10-pro_2__2.png'),
(1,'Xiaomi Redmi 9T','Android 10','Qualcomm SM6115 Snapdragon 662','48 MP','8 MP','128G',124990000,6.63,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-redmi-9t_1_.jpg'),
(1,'Xiaomi Redmi 9C','Android 10','MediaTek Helio G35','13 MP','5MP','32G',2490000,6.6,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/r/e/redmi-9c_2_.jpg'),
(2,'Samsung Galaxy Note 20 Ultra 5G','Android 10','Snapdragon 720G','108 MP','12 MP','256G',32000000,6.5,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg'),
(2,'Samsung Galaxy A52','Android 11','Snapdragon 720G','64 MP','32 MP','128G',9500000,6.6,25,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a52-26.jpg'),
(2,'Samsung Galaxy S21 Ultra 5G','Android 11','Snapdragon 720G','108MP','40 MP','128G',32000000,6.7,30,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg'),
(2,'Samsung Galaxy A12','Android 10','Helio G35','48 MP','8 MP','128G',5000000,6.3,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a12_2_.jpg'),
(2,'Samsung Galaxy A72','Android 11','Snapdragon 720G','64 MP','32 MP','256G',12000000,6.4,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a72-30.jpg'),
(2,'Samsung Galaxy Note 20 Ultra','Android 10','Exynos 990','108 MP','10 MP','256G',29999000,6.6,50,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/b/l/black_final.jpg'),
(2,'Samsung Galaxy S21 Plus 5G','Android 11','Exynos 2100','12 MP','10 MP','128G',25999000,6.35,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-plus-3.jpg'),
(2,'Samsung Galaxy A32','Android 10','Mediatek Helio G80','64 MP','20 MP','128G',6000000,6.5,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a32-20.jpg'),
(2,'Samsung Galaxy Note 20','Android 10','Exynos 990','12 MP','10 MP','256G',23000000,6.4,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mint_final.jpg'),
(2,'Samsung Galaxy A02s','Android 10','Qualcomm SDM450 Snapdragon 450','13 MP','5 MP','64G',4000000,6.3,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a02s-1.jpg'),
(2,'Samsung Galaxy A31','Android 10','MediaTek MT6768','48 MP + 8 MP + 5 MP + 5 MP','20 MP','128G',6000000,6.5,25,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_48_27.jpg'),
(2,'Samsung Galaxy A11','Android 10','Snapdragon 450','13 MP','8 MP','32G',2990000,6.4,30,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_48_28.jpg'),
(2,'Samsung Galaxy S21 Ultra 5G','Android 11','Exynos 2100','108MP','40 MP','256G',34000000,6.6,15,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1_2.jpg'),
(2,'Samsung Galaxy S20 Ultra','Android 10','Exynos 990','108 MP','40 MP','128G',29999000,6.8,25,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/6/3/637170935875912528_ss-s20-ultra-den-1.png'),
(2,'Samsung Galaxy Z Fold2 5G','Android 10','Qualcomm SM8250 Snapdragon 865+','2 MP','10 MP','256G',47000000,6.3,40,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/g/a/galaxy-z-fold2-5g-1.jpg'),
(3,'Oppo Reno5','ColorOS 11.1','Qualcomm Snapdragon 720G','64 MP + 8 MP + 2 MP + 2 MP','44 MP','128G',9000000,6.6,45,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-reno-5_3_.jpg'),
(3,'Oppo A93','Android 10','Mediatek Helio P95','48 MP','16 MP','128G',6500000,6.6,50,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/c/o/combo_-_a93-black_2.png'),
(3,'Oppo A73','Android 10','Qualcomm SM6115 Snapdragon 662','16 MP','16 MP','128G',5000000,6.7,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a73_1_.jpg'),
(3,'Oppo A15','Android 10','Mediatek MT6765 Helio P35','13 MP','8 MP','32G',3199000,6.3,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a15_1_.jpg'),
(3,'Oppo Reno5 5G','ColorOS 11.1','Qualcomm SM7250 Snapdragon 765G','64 MP + 8 MP + 2 MP + 2 MP','32 MP','128G',12000000,6.5,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-reno-5-5g_2_.jpg'),
(3,'Oppo A94','ColorOS 11.1','Helio P95','48 MP','32 MP','128G',7690000,6.5,30,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a94-purple.png'),
(3,'Oppo Reno4','Android 10','Qualcomm SM7125 Snapdragon 720G','48 MP + 8 MP + 2 MP + 2 MP','32 MP','128G',8590000,6.5,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0003_combo_-_reno4_-_blue_-_full_check.jpg'),
(3,'Oppo A12 3GB','ColorOS 6.1 (Android 9.0)','MediaTek Helio P35','13MP','5MP','32G',2990000,6.6,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a12_1_.jpg'),
(3,'Oppo A54','Android 10','Mediatek MT6765 Helio P35','13MP','16MP','128G',4690000,6.35,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a54-4g-black-600x600.jpg'),
(3,'Oppo Find X3 Pro','Android 10.0','Snapdragon 888','50MP','32MP','256G',20000000,6.5,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-find-x3-pro_4.jpg'),
(3,'Oppo Reno4 Pro','Android 10','Qualcomm SM7125 Snapdragon 720G','48MP','32MP','256G',11990000,6.6,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/_/0/_0001_combo_-_reno4_pro_-_white.jpg'),
(3,'Oppo Find X3','Android 11','Snapdragon 870','50MP','32 MP','128G',16000000,6.6,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/3/_/3_48_28.jpg'),
(3,'Oppo A53','Android 10','Qualcomm SM4250 Snapdragon 460','13 MP','16MP','128G',4590000,6.3,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/_/0/_0001_photo_2020-08-28_08-34-33.jpg'),
(3,'Oppo A31 6GB','ColorOS 6.1','MediaTek Helio P35','12MP','8MP','128G',4790000,6.5,30,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-a31-trang_2.png'),
(4,'Realme C12','Android 10','MediaTek Helio G35','13MP + 2MP + 2MP','5 MP','32 GB',3190000,6.52,20,'https://cdn.tgdd.vn/Products/Images/42/226733/realme-c12-do-13-600x600.jpg'),
(4,'Realme C20','Android 10','MediaTek Helio G35','8 MP','5 MP','32 GB',2690000,6.5,10,'https://cdn.tgdd.vn/Products/Images/42/232518/realme-c20-xanh-600x600-1-2-600x600.jpg'),
(4,'Realme 7 Pro','Android 10','Snapdragon 720G','64MP + 8MP + 2MP + 2MP','32 MP','128 GB',8490000,6.4,10,'https://cdn.tgdd.vn/Products/Images/42/227689/realme-7-pro-bac-600x600.jpg'),
(4,'Realme 8 Pro','Android 11','Snapdragon 720G','108MP + 8MP + 2MP + 2MP','16 MP','128 GB',8390000,6.4,20,'https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg'),
(4,'Realme 8','Android 11','MediaTek Helio G95','64MP + 8MP + 2MP + 2MP','16 MP','128 GB',7290000,6.4,0,'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg'),
(4,'Realme 6 Pro','Android 10','Snapdragon 720G','64MP + 12MP + 2MP + 2MP','16MP + 8MP','128 GB',6990000,6.6,30,'https://cdn.tgdd.vn/Products/Images/42/214645/realme-6-pro-do-600x600.jpg'),
(4,'Realme 7i','Android 10','Snapdragon 662','64MP + 8MP + 2MP + 2MP','16MP','128 GB',6290000,6.5,0,'https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-new-600x600.jpg'),
(4,'Realme 6 (4GB/128GB)','Android 10','MediaTek Helio G90T','64MP + 8MP + 2MP + 2MP','16MP','128 GB',5390000,6.5,10,'https://cdn.tgdd.vn/Products/Images/42/214644/realme-6-xanh-600x600.jpg'),
(4,'Realme C17','Android 10','Snapdragon 460','13MP + 8MP + 2MP + 2MP','8 MP','128 GB',5290000,6.5,10,'https://cdn.tgdd.vn/Products/Images/42/227681/realme-c17-green-600x600-1-600x600.jpg'),
(4,'Realme C25','Android 11','MediaTek Helio G70','48MP + 2MP + 2MP','8 MP','128 GB',4690000,6.5,20,'https://cdn.tgdd.vn/Products/Images/42/235996/realme-c25-blue-600x600-600x600.jpg'),
(4,'Realme 6i','Android 10','MediaTek Helio G80','48MP + 8MP + 2MP + 2MP','16 MP','128 GB',4590000,6.5,15,'https://cdn.tgdd.vn/Products/Images/42/218360/realme-6i-trang-new-600x600-600x600.jpg'),
(4,'Realme C15','Android 10','Snapdragon 460','13MP + 8MP + 2MP + 2MP','8 MP','128 GB',3790000,6.5,20,'https://cdn.tgdd.vn/Products/Images/42/226226/realme-c15-xanh-duong-600x600-600x600.jpg'),
(4,'Realme C11','Android 10','MediaTek Helio G35','13MP + 8MP','5MP','32 GB',2490000,6.5,30,'https://cdn.tgdd.vn/Products/Images/42/224967/realme-c11-xanh-la-12-600x600.jpg'),
(5,'Vivo Y51','Android 11','Snapdragon 662','48MP + 8MP + 2MP','16 MP','128 GB',5790000,6.58,10,'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg'),
(5,'Vivo x60 Pro','Android 11','Snapdragon 870 5G 8 nhân','48MP + 13MP + 13MP','32 MP','256 GB',19990000,6.56,20,'https://cdn.tgdd.vn/Products/Images/42/231602/vivo-x60-pro-thumb-black-600x600-600x600.jpg'),
(5,'Vivo V21 5G','Android 11','MediaTek Dimensity 800U 5G','64MP + 8MP + 2MP','44 MP','128 GB',9990000,6.44,20,'https://cdn.tgdd.vn/Products/Images/42/238047/vivo-v21-5g-xanh-den-600x600.jpg'),
(5,'Vivo Y72 5G','Android 11','MediaTek Dimensity 700','64MP + 8MP + 2MP','16 MP','128 GB',7990000,6.58,20,'https://cdn.tgdd.vn/Products/Images/42/236431/vivo-y72-5g-blue-600x600.jpg'),
(5,'Vivo V20 (2021)','Android 11','Snapdragon 730','64MP + 8MP + 2MP','44 MP','128 GB',7799000,6.44,10,'https://cdn.tgdd.vn/Products/Images/42/232614/vivov202021den-600x600.jpg'),
(5,'Vivo V20','Android 11','Snapdragon 720G','64MP + 8MP + 2MP','44 MP','128 GB',7990000,6.44,30,'https://cdn.tgdd.vn/Products/Images/42/228453/vivo-v20-600-xanh-hong-2-600x600.jpg'),
(5,'Vivo V20 SE','Android 10','Snapdragon 665','48MP + 8MP + 2MP','32 MP','128 GB',6490000,6.44,40,'https://cdn.tgdd.vn/Products/Images/42/228141/vivo-v20-se-600x600-600x600.jpg'),
(5,'Vivo Y50','Android 10','Snapdragon 665','13MP + 8MP + 2MP','16 MP','128 GB',5090000,6.53,50,'https://cdn.tgdd.vn/Products/Images/42/219913/vivo-y50-xanh-600x600-600x600.jpg'),
(5,'Vivo Y20s','Android 10','Snapdragon 460','13MP + 2MP + 2MP','8 MP','128 GB',4690000,6.51,45,'https://cdn.tgdd.vn/Products/Images/42/228376/vivo-y20s-xanh-1-600x600.jpg'),
(5,'Vivo Y12s (4GB/128GB)','Android 10','MediaTek Helio P35','13MP + 2MP','8MP','128 GB',3790000,6.51,10,'https://cdn.tgdd.vn/Products/Images/42/230630/vivo-y12s-den-new-600x600-600x600.jpg'),
(5,'Vivo Y20 (2021)','Android 10','MediaTek Helio P35','13MP + 2MP + 2MP','8 MP','64 GB',3680000,6.51,20,'https://cdn.tgdd.vn/Products/Images/42/231984/vivo-y20-2021-blue-600x600.jpg'),
(5,'Vivo Y20','Android 10','Snapdragon 460','13MP + 2MP + 2MP','8 MP','64 GB',3690000,6.51,10,'https://cdn.tgdd.vn/Products/Images/42/227525/vivo-y20-white-600x600.jpg'),
(5,'Vivo Y12s (2021)','Android 11','Snapdragon 439','13MP + 2MP','8MP','32 GB',3290000,6.51,20,'https://cdn.tgdd.vn/Products/Images/42/237935/vivo-y12s-2021-black-600x600.jpg'),
(5,'Vivo Y1s','Android 10','MediaTek Helio P35','13 MP','5 MP','32 GB',2350000,6.22,30,'https://cdn.tgdd.vn/Products/Images/42/225851/vivo-y1s-xanh-600x600.jpg'),
(6,'Vsmart Aris Pro','Android 10','Snapdragon 730','64MP + 8MP + 8MP + 2MP','20MP','128 GB',8490000,6.39,40,'https://cdn.tgdd.vn/Products/Images/42/228531/vsmart-aris-pro-green-600jpg-600x600.jpg'),
(6,'Vsmart Aris (6GB/64GB)','Android 10','Snapdragon 730','64MP + 8MP + 8MP + 2MP','20MP','128 GB',5990000,6.39,50,'https://cdn.tgdd.vn/Products/Images/42/228530/vsmart-aris-xanh-la-new-600x600-600x600.jpg'),
(6,'Vsmart Live 4 6GB','Android 10','Snapdragon 675','48MP + 8MP + 8MP + 2MP','13MP','64 GB',4090000,6.5,30,'https://cdn.tgdd.vn/Products/Images/42/227529/vsmart-live-4-den-600x600.jpg'),
(6,'Vsmart Joy 4 (6GB/64GB)','Android 10','Snapdragon 665','16MP + 8MP + 8MP + 2MP','13MP','64 GB',3840000,6.53,40,'https://cdn.tgdd.vn/Products/Images/42/231992/vsmart-joy-4-6gb-xanh-600x600-600x600.jpg'),
(6,'Vsmart Active 3 (6GB/64GB)','Android 10','MediaTek Helio P60','48MP + 8MP + 2MP','16MP','64 GB',3690000,6.39,50,'https://cdn.tgdd.vn/Products/Images/42/217438/vsmart-active-3-tim-600x600-600x600.jpg'),
(6,'Vsmart Star 5 (4GB/64GB)','Android 10','MediaTek Helio G35','13MP + 2MP + 2MP','8MP','64 GB',3290000,6.52,20,'https://cdn.tgdd.vn/Products/Images/42/237768/vsmart-star-5-thumb-black-600x600.jpg'),
(6,'Vsmart Joy 3 (4GB/64GB)','Android 9 (Pie)','Snapdragon 632','13MP + 8MP + 2MP','8 MP','64 GB',2990000,6.5,30,'https://cdn.tgdd.vn/Products/Images/42/219208/vsmart-joy-3-4gb-trang-600x600-1-600x600.jpg'),
(6,'Vsmart Star 4 (3GB/32GB)','Android 10','MediaTek Helio P35','8MP + 5MP','8MP','32 GB',2340000,6.09,10,'https://cdn.tgdd.vn/Products/Images/42/225158/vsmart-start-3gb-den-600x600.jpg'),
(7,'Iphone 7','Ios 13',' Apple A10 Fusion','12-megapixel','7-megapixel','64G',12000000,6,20,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_7_256gb.jpg'),
(7,'Iphone 7 plus','Ios 13',' Apple A10 Fusion','12 MP + 12 MP','7 MP','64G',13000000,6.2,30,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_7_plus_32gb.jpg'),
(7,'Iphone 8','Ios 13',' Apple A11 Bionic','12 MP','7 MP','128G',15000000,6.2,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_8_256gb_2.jpg'),
(7,'Iphone 8 plus','Ios 13',' Apple A11 Bionic','12 MP + 12 MP','7 MP','128G',16000000,6.3,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_8_plus_256gb_1_1.jpg'),
(7,'Iphone X','Ios 13',' Apple A11 Bionic','12 MP + 12 MP','7 MP','128G',22000000,6.5,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_256gb_4.jpg'),
(7,'Iphone 11','Ios 13',' Apple A13 Bionic','12 MP','12 MP','128G',21999000,6.5,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/l/a/layer_20_1.jpg'),
(7,'Iphone 11','Ios 13',' Apple A13 Bionic','12 MP','12 MP','256G',23000000,6.5,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/l/a/layer_20_2.jpg'),
(7,'Iphone 11 pro','Ios 13',' Apple A13 Bionic','12 MP','12 MP','256G',25000000,6.5,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-11-pro-midnight-green-select-2019_6_2_1.png'),
(7,'Iphone 11 pro','Ios 13',' Apple A13 Bionic','12 MP','12 MP','128G',23000000,6.5,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-11-pro-midnight-green-select-2019_6_2_1.png'),
(7,'Iphone 11 pro max','Ios 13',' Apple A13 Bionic','12 MP','12 MP','128G',30000000,6.6,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/i/p/ip-11-pro-xam.jpg'),
(7,'Iphone 11 pro max','Ios 13',' Apple A13 Bionic','12 MP','12 MP','256G',34000000,6.6,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/i/p/ip-11-pro-xam.jpg'),
(7,'Iphone 12','Ios 13',' Apple A14 Bionic','12 MP','12 MP','256G',27000000,6.6,0,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_2_1_2_2.png'),
(7,'Iphone 12 pro','Ios 13',' Apple A14 Bionic','12 MP','12 MP','256G',29000000,6.6,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_4_1_1_2.png'),
(7,'Iphone 12 pro max','Ios 13',' Apple A14 Bionic','12 MP','12 MP','512G',40000000,6.8,10,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_3__5.jpg'),
(7,'Iphone 12 pro max','Ios 13',' Apple A14 Bionic','12 MP','12 MP','256G',37000000,6.8,5,'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_3__5.jpg');
