CREATE SCHEMA IF NOT EXISTS `green_commute_db` DEFAULT CHARACTER SET utf8 ;
USE `green_commute_db` ;

-- -----------------------------------------------------
-- Table `green_commute_db`.`job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`jobs` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`jobs` (
  `id` INT NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `distance` varchar(255) DEFAULT NULL,
  `location_id` INT NOT NULL,
  `image` varchar(255) DEFAULT  NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_job_has_location_id`
    FOREIGN KEY (`location_id`)
    REFERENCES `green_commute_db`.`location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
