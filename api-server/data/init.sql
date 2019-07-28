CREATE DATABASE IF NOT EXISTS sae_db ;
USE sae_db;
DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS users;



CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `lists` (
  `list_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`list_id`),
  -- KEY `lists_user` (`user_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
  -- CONSTRAINT `lists_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE TABLE `lists` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `condition` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `price` int(11) NOT NULL,
--   -- `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   -- `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `user_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `lists_user` (`user_id`),
--   CONSTRAINT `lists_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



