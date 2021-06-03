CREATE TABLE mobileshopdb.account (
  id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  usn varchar(50) DEFAULT NULL,
  pwd varchar(50) DEFAULT NULL,
  PRIMARY KEY (id)
);
INSERT INTO mobileshopdb.account (usn, pwd) VALUES ('admin','admin')