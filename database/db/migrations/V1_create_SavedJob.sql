CREATE SCHEMA IF NOT EXISTS `green_commute_db` DEFAULT CHARACTER SET utf8 ;
USE `green_commute_db` ;
DROP TABLE IF EXISTS `green_commute_db`.`saved_jobs` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`saved_jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `saved` bit(1) DEFAULT NULL,
  `job_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_greencommute-saved_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `green_commute_db`.`jobs` (`id`)
) ENGINE=InnoDB;