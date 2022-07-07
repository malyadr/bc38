CREATE SCHEMA IF NOT EXISTS `green_commute_db` DEFAULT CHARACTER SET utf8 ;
USE `green_commute_db` ;
DROP TABLE IF EXISTS `green_commute_db`.`location` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) DEFAULT NULL,
  `aqi` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;