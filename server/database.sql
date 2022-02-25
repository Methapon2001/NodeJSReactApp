CREATE DATABASE IF NOT EXISTS `reactappexam`;

USE `reactappexam`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cityId` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdBy` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`cityId`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO cities(name) VALUES('กรุงเทพมหานคร');
INSERT INTO cities(name) VALUES('เชียงราย');
INSERT INTO cities(name) VALUES('เชียงใหม่');
INSERT INTO cities(name) VALUES('น่าน');
INSERT INTO cities(name) VALUES('พะเยา');
INSERT INTO cities(name) VALUES('แพร่');
INSERT INTO cities(name) VALUES('แม่ฮ่องสอน');
INSERT INTO cities(name) VALUES('ลำปาง');
INSERT INTO cities(name) VALUES('ลำพูน');
INSERT INTO cities(name) VALUES('อุตรดิตถ์');
INSERT INTO cities(name) VALUES('กาฬสินธุ์');
INSERT INTO cities(name) VALUES('ขอนแก่น');
INSERT INTO cities(name) VALUES('ชัยภูมิ');
INSERT INTO cities(name) VALUES('นครพนม');
INSERT INTO cities(name) VALUES('นครราชสีมา');
INSERT INTO cities(name) VALUES('บึงกาฬ');
INSERT INTO cities(name) VALUES('บุรีรัมย์');
INSERT INTO cities(name) VALUES('มหาสารคาม');
INSERT INTO cities(name) VALUES('มุกดาหาร');
INSERT INTO cities(name) VALUES('ยโสธร');
INSERT INTO cities(name) VALUES('ร้อยเอ็ด');
INSERT INTO cities(name) VALUES('เลย');
INSERT INTO cities(name) VALUES('สกลนคร');
INSERT INTO cities(name) VALUES('สุรินทร์');
INSERT INTO cities(name) VALUES('ศรีสะเกษ');
INSERT INTO cities(name) VALUES('หนองคาย');
INSERT INTO cities(name) VALUES('หนองบัวลำภู');
INSERT INTO cities(name) VALUES('อุดรธานี');
INSERT INTO cities(name) VALUES('อุบลราชธานี');
INSERT INTO cities(name) VALUES('อำนาจเจริญ');
INSERT INTO cities(name) VALUES('กำแพงเพชร');
INSERT INTO cities(name) VALUES('ชัยนาท');
INSERT INTO cities(name) VALUES('นครนายก');
INSERT INTO cities(name) VALUES('นครปฐม');
INSERT INTO cities(name) VALUES('นครสวรรค์');
INSERT INTO cities(name) VALUES('นนทบุรี');
INSERT INTO cities(name) VALUES('ปทุมธานี');
INSERT INTO cities(name) VALUES('พระนครศรีอยุธยา');
INSERT INTO cities(name) VALUES('พิจิตร');
INSERT INTO cities(name) VALUES('พิษณุโลก');
INSERT INTO cities(name) VALUES('เพชรบูรณ์');
INSERT INTO cities(name) VALUES('ลพบุรี');
INSERT INTO cities(name) VALUES('สมุทรปราการ');
INSERT INTO cities(name) VALUES('สมุทรสงคราม');
INSERT INTO cities(name) VALUES('สมุทรสาคร');
INSERT INTO cities(name) VALUES('สิงห์บุรี');
INSERT INTO cities(name) VALUES('สุโขทัย');
INSERT INTO cities(name) VALUES('สุพรรณบุรี');
INSERT INTO cities(name) VALUES('สระบุรี');
INSERT INTO cities(name) VALUES('อ่างทอง');
INSERT INTO cities(name) VALUES('อุทัยธานี');
INSERT INTO cities(name) VALUES('จันทบุรี');
INSERT INTO cities(name) VALUES('ฉะเชิงเทรา');
INSERT INTO cities(name) VALUES('ชลบุรี');
INSERT INTO cities(name) VALUES('ตราด');
INSERT INTO cities(name) VALUES('ปราจีนบุรี');
INSERT INTO cities(name) VALUES('ระยอง');
INSERT INTO cities(name) VALUES('สระแก้ว');
INSERT INTO cities(name) VALUES('กาญจนบุรี');
INSERT INTO cities(name) VALUES('ตาก');
INSERT INTO cities(name) VALUES('ประจวบคีรีขันธ์');
INSERT INTO cities(name) VALUES('เพชรบุรี');
INSERT INTO cities(name) VALUES('ราชบุรี');
INSERT INTO cities(name) VALUES('กระบี่');
INSERT INTO cities(name) VALUES('ชุมพร');
INSERT INTO cities(name) VALUES('ตรัง');
INSERT INTO cities(name) VALUES('นครศรีธรรมราช');
INSERT INTO cities(name) VALUES('นราธิวาส');
INSERT INTO cities(name) VALUES('ปัตตานี');
INSERT INTO cities(name) VALUES('พังงา');
INSERT INTO cities(name) VALUES('พัทลุง');
INSERT INTO cities(name) VALUES('ภูเก็ต');
INSERT INTO cities(name) VALUES('ระนอง');
INSERT INTO cities(name) VALUES('สตูล');
INSERT INTO cities(name) VALUES('สงขลา');
INSERT INTO cities(name) VALUES('สุราษฎร์ธานี');
INSERT INTO cities(name) VALUES('ยะลา');