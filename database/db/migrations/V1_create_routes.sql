CREATE SCHEMA IF NOT EXISTS `green_commute_db` DEFAULT CHARACTER SET utf8 ;
USE `green_commute_db` ;
DROP TABLE IF EXISTS `green_commute_db`.`routes` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`routes` (
  `bus` TINYINT NOT NULL,
  `cab` TINYINT NOT NULL,
  `metro` TINYINT NOT NULL,
  `bike` TINYINT NOT NULL,
  `job_id` INT NOT NULL,
  `id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_greencommute-job1-routes`
    FOREIGN KEY (`job_id`)
    REFERENCES `green_commute_db`.`jobs` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
