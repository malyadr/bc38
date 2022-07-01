-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema green_commute_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema green_commute_db
-- -----------------------------------------------------
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



-- -----------------------------------------------------
-- Table `green_commute_db`.`skill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`skill` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`skill` (
  `id` INT NOT NULL,
  `skill` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `green_commute_db`.`job_has_skill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`job_has_skill` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`job_has_skill` (
  `job_id` INT NOT NULL,
  `skill_id` INT NOT NULL,
  PRIMARY KEY (`job_id`, `skill_id`),
  INDEX `fk_job_has_skill_skill1_idx` (`skill_id` ASC) VISIBLE,
  INDEX `fk_job_has_skill_job1_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_has_skill_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `green_commute_db`.`job` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_has_skill_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `green_commute_db`.`skill` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;





-- -----------------------------------------------------
-- Table `green_commute_db`.`routes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`routes` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`routes` (
  `bus` TINYINT NOT NULL,
  `cab` TINYINT NOT NULL,
  `metro` TINYINT NOT NULL,
  `bike` TINYINT NOT NULL,
  `job_id` INT NOT NULL,
  CONSTRAINT `fk_greencommute-job1-routes`
    FOREIGN KEY (`job_id`)
    REFERENCES `green_commute_db`.`job` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `green_commute_db`.`applied_jobs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`applied_jobs` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`applied_jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `applied` bit(1) DEFAULT NULL,
  `job_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_greencommute-applied_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `green_commute_db`.`job` (`id`)
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Table `green_commute_db`.`saved_jobs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`saved_jobs` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`saved_jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `saved` bit(1) DEFAULT NULL,
  `job_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_greencommute-saved_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `green_commute_db`.`job` (`id`)
) ENGINE=InnoDB;


-- -----------------------------------------------------
-- Table `green_commute_db`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `green_commute_db`.`location` ;

CREATE TABLE IF NOT EXISTS `green_commute_db`.`location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) DEFAULT NULL,
  `aqi` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `green_commute_db`.`location`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (1, 'Hyderabad', 894);
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (2, 'Faridabad', 853);
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (3, 'Mumbai', 953);
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (4, 'Chandigarh', 883);

COMMIT;


-- -----------------------------------------------------
-- Data for table `green_commute_db`.`jobs`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`jobs` (`id`, `description`, `company_name`, `role`, `image`, `distance`, `time`, `location_id`) VALUES (1, 'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',  'HP', 'Backend Developer', 'hp', '0-10kms',  '1hr 36 mins ago', 1);
INSERT INTO `green_commute_db`.`jobs` (`id`, `description`, `company_name`, `role`, `image`, `distance`, `time`, `location_id`) VALUES (2, 'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',  'Instagram', 'User Experience Designer', 'instagram', '0-10kms',  '45 min ago', 1);
INSERT INTO `green_commute_db`.`jobs` (`id`, `description`, `company_name`, `role`, `image`, `distance`, `time`, `location_id`) VALUES (3, 'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',  'BMW', 'User Experience Designer', 'BMW', '11-20kms',  '3 days ago', 1);
INSERT INTO `green_commute_db`.`jobs` (`id`, `description`, `company_name`, `role`, `image`, `distance`, `time`, `location_id`) VALUES (4, 'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',  'Myntra', 'User Experience Designer', 'myntra', '21-30kms',  '4 days ago', 1);
INSERT INTO `green_commute_db`.`jobs` (`id`, `description`, `company_name`, `role`, `image`, `distance`, `time`, `location_id`) VALUES (5, 'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',  'Twitter', 'User Experience Designer', 'twitter', '31-40kms',  '1 week ago', 3);
INSERT INTO `green_commute_db`.`jobs` (`id`, `description`, `company_name`, `role`, `image`, `distance`, `time`, `location_id`) VALUES (6, 'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',  'Wipro', 'User Experience Designer', 'wipro', '21-30kms',  '10 days ago', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `green_commute_db`.`skill`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`skill` (`id`, `skill`) VALUES (1, 'UX Designer');
INSERT INTO `green_commute_db`.`skill` (`id`, `skill`) VALUES (2, 'Backend Developer');

COMMIT;


-- -----------------------------------------------------
-- Data for table `green_commute_db`.`job_has_skill`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`job_has_skill` (`job_id`, `skill_id`) VALUES (1, 2);
INSERT INTO `green_commute_db`.`job_has_skill` (`job_id`, `skill_id`) VALUES (2, 1);
INSERT INTO `green_commute_db`.`job_has_skill` (`job_id`, `skill_id`) VALUES (3, 1);
INSERT INTO `green_commute_db`.`job_has_skill` (`job_id`, `skill_id`) VALUES (4, 1);
INSERT INTO `green_commute_db`.`job_has_skill` (`job_id`, `skill_id`) VALUES (5, 1);
INSERT INTO `green_commute_db`.`job_has_skill` (`job_id`, `skill_id`) VALUES (6, 2);

COMMIT;








-- -----------------------------------------------------
-- Data for table `green_commute_db`.`routes`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`) VALUES (0, 1, 1, 0, 1);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`) VALUES (0, 1, 1, 0, 2);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`) VALUES (1, 1, 1, 0, 3);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`) VALUES (1, 1, 1, 0, 4);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`) VALUES (0, 1, 1, 1, 5);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`) VALUES (0, 1, 1, 1, 6);

COMMIT;

-- -----------------------------------------------------
-- Data for table `green_commute_db`.`applied_jobs`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`applied_jobs` (`id`, `applied`, `job_id`) VALUES (1, 0, 1);
INSERT INTO `green_commute_db`.`applied_jobs` (`id`, `applied`, `job_id`) VALUES (2, 0, 2);
INSERT INTO `green_commute_db`.`applied_jobs` (`id`, `applied`, `job_id`) VALUES (3, 0, 3);
INSERT INTO `green_commute_db`.`applied_jobs` (`id`, `applied`, `job_id`) VALUES (4, 0, 4);
INSERT INTO `green_commute_db`.`applied_jobs` (`id`, `applied`, `job_id`) VALUES (5, 0, 5);
INSERT INTO `green_commute_db`.`applied_jobs` (`id`, `applied`, `job_id`) VALUES (6, 0, 6);

COMMIT;


-- -----------------------------------------------------
-- Data for table `green_commute_db`.`saved_jobs`
-- -----------------------------------------------------
START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`saved_jobs` (`id`, `saved`, `job_id`) VALUES (1, 0, 1);
INSERT INTO `green_commute_db`.`saved_jobs` (`id`, `saved`, `job_id`) VALUES (2, 0, 2);
INSERT INTO `green_commute_db`.`saved_jobs` (`id`, `saved`, `job_id`) VALUES (3, 0, 3);
INSERT INTO `green_commute_db`.`saved_jobs` (`id`, `saved`, `job_id`) VALUES (4, 0, 4);
INSERT INTO `green_commute_db`.`saved_jobs` (`id`, `saved`, `job_id`) VALUES (5, 0, 5);
INSERT INTO `green_commute_db`.`saved_jobs` (`id`, `saved`, `job_id`) VALUES (6, 0, 6);

COMMIT;