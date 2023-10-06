 -- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PrivateSchool
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PrivateSchool
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PrivateSchool` DEFAULT CHARACTER SET utf8 ;
USE `PrivateSchool` ;

-- -----------------------------------------------------
-- Table `PrivateSchool`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`admin` (
  `idadmin` INT NOT NULL,
  `admin_name` VARCHAR(45) NOT NULL,
  `admin_password` LONGTEXT NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `birthdaydate` DATE NOT NULL,
  `number` VARCHAR(45) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  `admin_idadmin` INT NOT NULL,
  `ClassName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  INDEX `fk_users_admin_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_users_admin`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `PrivateSchool`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`classes` (
  `idclasses` INT NOT NULL AUTO_INCREMENT,
  `class_name` VARCHAR(45) NOT NULL,
  `imageEmploi` LONGTEXT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idclasses`),
  INDEX `fk_classes_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_classes_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `PrivateSchool`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`Student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`Student` (
  `idStudent` INT NOT NULL AUTO_INCREMENT,
  `student_firstName` VARCHAR(45) NOT NULL,
  `student_lastName` VARCHAR(45) NOT NULL,
  `student_birthday` DATE NOT NULL,
  `student_currentClass` VARCHAR(45) NOT NULL,
  `student_image` LONGTEXT NOT NULL,
  `student_option1` VARCHAR(100) NOT NULL,
  `student_options2` VARCHAR(100) NOT NULL,
  `classes_idclasses` INT NOT NULL,
  PRIMARY KEY (`idStudent`),
  INDEX `fk_Student_classes1_idx` (`classes_idclasses` ASC) VISIBLE,
  CONSTRAINT `fk_Student_classes1`
    FOREIGN KEY (`classes_idclasses`)
    REFERENCES `PrivateSchool`.`classes` (`idclasses`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`messages` (
  `idmessage` INT NOT NULL,
  `message_content` LONGTEXT NOT NULL,
  `sender` VARCHAR(255) NULL,
  PRIMARY KEY (`idmessage`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`subject` (
  `idsubject` INT NOT NULL AUTO_INCREMENT,
  `subject_name` VARCHAR(45) NOT NULL,
  `note1` FLOAT NOT NULL,
  `note2` FLOAT NOT NULL,
  `note3` FLOAT NOT NULL,
  `Student_idStudent` INT NOT NULL,
  PRIMARY KEY (`idsubject`),
  INDEX `fk_subject_Student1_idx` (`Student_idStudent` ASC) VISIBLE,
  CONSTRAINT `fk_subject_Student1`
    FOREIGN KEY (`Student_idStudent`)
    REFERENCES `PrivateSchool`.`Student` (`idStudent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`calendrier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`calendrier` (
  `idcalendrier` INT NOT NULL AUTO_INCREMENT,
  `dateHoliday` DATE NOT NULL,
  `NameEvent` VARCHAR(45) NOT NULL,
  `dateAbsent` DATE NOT NULL,
  `NotAbsent` LONGTEXT NOT NULL,
  `NotHoliday` LONGTEXT NOT NULL,
  `calendriercol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcalendrier`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`conversation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`conversation` (
  `idconversation` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`idconversation`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`payement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`payement` (
  `idpayement` INT NOT NULL AUTO_INCREMENT,
  `montantTotal` INT NOT NULL,
  `montantPaye` INT NOT NULL,
  `montantRestant` INT NOT NULL,
  PRIMARY KEY (`idpayement`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`participants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`participants` (
  `idparticipants` INT NOT NULL,
  PRIMARY KEY (`idparticipants`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PrivateSchool`.`subject_has_classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PrivateSchool`.`subject_has_classes` (
  `subject_idsubject` INT NOT NULL,
  `classes_idclasses` INT NOT NULL,
  PRIMARY KEY (`subject_idsubject`, `classes_idclasses`),
  INDEX `fk_subject_has_classes_classes1_idx` (`classes_idclasses` ASC) VISIBLE,
  INDEX `fk_subject_has_classes_subject1_idx` (`subject_idsubject` ASC) VISIBLE,
  CONSTRAINT `fk_subject_has_classes_subject1`
    FOREIGN KEY (`subject_idsubject`)
    REFERENCES `PrivateSchool`.`subject` (`idsubject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_subject_has_classes_classes1`
    FOREIGN KEY (`classes_idclasses`)
    REFERENCES `PrivateSchool`.`classes` (`idclasses`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

