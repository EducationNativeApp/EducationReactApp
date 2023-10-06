 -- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Harmony
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Harmony
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Harmony` DEFAULT CHARACTER SET utf8 ;
USE `Harmony` ;

-- -----------------------------------------------------
-- Table `Harmony`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(85) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(85) NOT NULL,
  `email` VARCHAR(455) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `Birthday` DATE NOT NULL,
  `Number` INT NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`teachers` (
  `idteacher` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(85) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `number` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  PRIMARY KEY (`idteacher`),
  INDEX `fk_teachers_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_teachers_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `Harmony`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`classes` (
  `idclasses` INT NOT NULL AUTO_INCREMENT,
  `class_name` VARCHAR(85) NOT NULL,
  `imageEmploi` LONGTEXT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  PRIMARY KEY (`idclasses`),
  INDEX `fk_classes_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  INDEX `fk_classes_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_classes_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `Harmony`.`teachers` (`idteacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_classes_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `Harmony`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`Student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`Student` (
  `idStudent` INT NOT NULL AUTO_INCREMENT,
  `First_name` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `Birthday` DATE NOT NULL,
  `class` VARCHAR(85) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `users_idusers` INT NOT NULL,
  `classes_idclasses` INT NOT NULL,
  PRIMARY KEY (`idStudent`),
  INDEX `fk_Student_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_Student_classes1_idx` (`classes_idclasses` ASC) VISIBLE,
  CONSTRAINT `fk_Student_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `Harmony`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Student_classes1`
    FOREIGN KEY (`classes_idclasses`)
    REFERENCES `Harmony`.`classes` (`idclasses`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`subject` (
  `idsubject` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(95) NOT NULL,
  `classes_idclasses` INT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idsubject`),
  INDEX `fk_subject_classes1_idx` (`classes_idclasses` ASC) VISIBLE,
  INDEX `fk_subject_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_subject_classes1`
    FOREIGN KEY (`classes_idclasses`)
    REFERENCES `Harmony`.`classes` (`idclasses`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_subject_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `Harmony`.`teachers` (`idteacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`notes` (
  `idnote` INT NOT NULL AUTO_INCREMENT,
  `note1` FLOAT NOT NULL,
  `note2` FLOAT NOT NULL,
  `note3` FLOAT NOT NULL,
  `subject_idsubject` INT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idnote`, `teachers_idteacher`),
  INDEX `fk_notes_subject1_idx` (`subject_idsubject` ASC) VISIBLE,
  INDEX `fk_notes_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_notes_subject1`
    FOREIGN KEY (`subject_idsubject`)
    REFERENCES `Harmony`.`subject` (`idsubject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notes_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `Harmony`.`teachers` (`idteacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`calendrier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`calendrier` (
  `idcalendrier` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `event` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcalendrier`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`payement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`payement` (
  `idpayement` INT NOT NULL AUTO_INCREMENT,
  `montantTotal` INT NOT NULL,
  `montantPaye` INT NOT NULL,
  `montantRestant` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idpayement`),
  INDEX `fk_payement_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_payement_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `Harmony`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`chat` (
  `idchat` INT NOT NULL AUTO_INCREMENT,
  `latest_msg` LONGTEXT NOT NULL,
  `users_idusers` INT NOT NULL,
  `teachers_idteacher` INT NOT NULL,
  PRIMARY KEY (`idchat`),
  INDEX `fk_chat_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_chat_teachers1_idx` (`teachers_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_chat_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `Harmony`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_chat_teachers1`
    FOREIGN KEY (`teachers_idteacher`)
    REFERENCES `Harmony`.`teachers` (`idteacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Harmony`.`messages` (
  `idmessages` INT NOT NULL AUTO_INCREMENT,
  `senders` VARCHAR(85) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `created_at` DATE NOT NULL,
  `chat_idchat` INT NOT NULL,
  PRIMARY KEY (`idmessages`),
  INDEX `fk_messages_chat1_idx` (`chat_idchat` ASC) VISIBLE,
  CONSTRAINT `fk_messages_chat1`
    FOREIGN KEY (`chat_idchat`)
    REFERENCES `Harmony`.`chat` (`idchat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Harmony`.`table1`
-- -----------------------------------------------------



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

