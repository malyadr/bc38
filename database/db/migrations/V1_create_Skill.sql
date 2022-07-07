CREATE SCHEMA IF NOT EXISTS `green_commute_db` DEFAULT CHARACTER SET utf8 ;
USE `green_commute_db` ;
DROP TABLE IF EXISTS `green_commute_db`.`skill` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`skill` (
  `id` INT NOT NULL,
  `skill` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
