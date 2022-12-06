DROP DATABASE IF EXISTS dolphin_crm;
CREATE DATABASE dolphin_crm;
USE dolphin_crm;



DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
    `id` int(11) NOT NULL auto_increment,
    `firstname` VARCHAR(50) NOT NULL default '',
    `lastname` VARCHAR(50) NOT NULL  default '',
    `password` VARCHAR(11)  NOT NULL  default '',
    `email` VARCHAR(20) NOT NULL default '',
    `role` VARCHAR(20) NOT NULL default '',
    `created_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `Contacts`;
CREATE TABLE `Contacts` (
    `id` int(11) NOT NULL auto_increment,
    `title` VARCHAR(4) NOT NULL,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `telephone` VARCHAR(11) NOT NULL,
    `company` VARCHAR(50) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `assigned_to` int(11) NOT NULL,
    `created_by` int(11) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `Contacts`;
CREATE TABLE `Contacts` (
    `id` int(11) NOT NULL auto_increment,
    `contact_id` int(11) NOT NULL,
    `comment` TEXT(100) NOT NULL,
    `assigned_to` int(11) NOT NULL,
    `created_by` int(11) NOT NULL,
    `created_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

INSERT INTO Users (email,password) VALUES ('admin@project2.com', HASHBYTES('SHA2_256','password123'));


