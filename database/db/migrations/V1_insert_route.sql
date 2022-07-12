START TRANSACTION;
USE `green_commute_db`;
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`, `id`) VALUES (0, 1, 1, 0, 1, 1);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`, `id`) VALUES (0, 1, 1, 0, 2, 2);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`, `id`) VALUES (1, 1, 1, 0, 3, 3);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`, `id`) VALUES (1, 1, 1, 0, 4, 4);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`, `id`) VALUES (0, 1, 1, 1, 5, 5);
INSERT INTO `green_commute_db`.`routes` (`bus`, `cab`, `metro`, `bike`, `job_id`, `id`) VALUES (0, 1, 1, 1, 6, 6);

COMMIT;