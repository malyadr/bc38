START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (1, 'Hyderabad', 894);
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (2, 'Faridabad', 853);
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (3, 'Mumbai', 953);
INSERT INTO `green_commute_db`.`location` (`id`, `location_name`, `aqi`) VALUES (4, 'Chandigarh', 883);

COMMIT;