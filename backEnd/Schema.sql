-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema education
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema school
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema school
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `school` DEFAULT CHARACTER SET utf8mb3 ;
USE `school` ;

-- -----------------------------------------------------
-- Table `school`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `admin_name` VARCHAR(45) NULL DEFAULT NULL,
  `admin_password` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`emplois`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`emplois` (
  `idemplois` INT NOT NULL AUTO_INCREMENT,
  `classe_de_emploi` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`idemplois`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`classe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`classe` (
  `idclasse` INT NOT NULL AUTO_INCREMENT,
  `classe_name` VARCHAR(45) NOT NULL,
  `emplois_idemplois` INT NOT NULL,
  PRIMARY KEY (`idclasse`),
  INDEX `fk_classe_emplois1_idx` (`emplois_idemplois` ASC) VISIBLE,
  CONSTRAINT `fk_classe_emplois1`
    FOREIGN KEY (`emplois_idemplois`)
    REFERENCES `school`.`emplois` (`idemplois`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(100) NOT NULL,
  `user_password` VARCHAR(255) NOT NULL,
  `user_birthday` DATE NOT NULL,
  `user_number` VARCHAR(100) NOT NULL,
  `user_image` LONGTEXT NULL DEFAULT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  `user_description` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`messages` (
  `idmessages` INT NOT NULL AUTO_INCREMENT,
  `message_content` LONGTEXT NULL DEFAULT NULL,
  `message_image` LONGTEXT NULL DEFAULT NULL,
  `sender_id` INT NOT NULL,
  `reciver_id` INT NOT NULL,
  PRIMARY KEY (`idmessages`),
  INDEX `fk_messages_users_idx` (`sender_id` ASC) VISIBLE,
  INDEX `fk_messages_users1_idx` (`reciver_id` ASC) VISIBLE,
  CONSTRAINT `fk_messages_users`
    FOREIGN KEY (`sender_id`)
    REFERENCES `school`.`users` (`idusers`),
  CONSTRAINT `fk_messages_users1`
    FOREIGN KEY (`reciver_id`)
    REFERENCES `school`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`student` (
  `idstudent` INT NOT NULL AUTO_INCREMENT,
  `student_firstName` VARCHAR(45) NOT NULL,
  `student_lastName` VARCHAR(45) NOT NULL,
  `student_birthday` DATE NOT NULL,
  `student_currentClass` VARCHAR(45) NOT NULL,
  `student_image` LONGTEXT NOT NULL,
  `student_option1` VARCHAR(100) NULL DEFAULT NULL,
  `student_option2` VARCHAR(100) NULL DEFAULT NULL,
  `classe_idclasse` INT NOT NULL,
  `emplois_idemplois` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idstudent`),
  INDEX `fk_student_classe1_idx` (`classe_idclasse` ASC) VISIBLE,
  INDEX `fk_student_emplois1_idx` (`emplois_idemplois` ASC) VISIBLE,
  INDEX `fk_student_users1_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_student_classe1`
    FOREIGN KEY (`classe_idclasse`)
    REFERENCES `school`.`classe` (`idclasse`),
  CONSTRAINT `fk_student_emplois1`
    FOREIGN KEY (`emplois_idemplois`)
    REFERENCES `school`.`emplois` (`idemplois`),
  CONSTRAINT `fk_student_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `school`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`subject` (
  `idsubject` INT NOT NULL AUTO_INCREMENT,
  `subject_name` VARCHAR(45) NOT NULL,
  `subject_description` LONGTEXT NULL DEFAULT NULL,
  `notes_idnotes` INT NOT NULL,
  `notes_note_content` LONGTEXT NOT NULL,
  `student_idstudent` INT NOT NULL,
  PRIMARY KEY (`idsubject`),
  INDEX `fk_subject_student1_idx` (`student_idstudent` ASC) VISIBLE,
  CONSTRAINT `fk_subject_student1`
    FOREIGN KEY (`student_idstudent`)
    REFERENCES `school`.`student` (`idstudent`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`module`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`module` (
  `idmodule` INT NOT NULL AUTO_INCREMENT,
  `module_name` VARCHAR(45) NOT NULL,
  `module_description` LONGTEXT NULL DEFAULT NULL,
  `subject_idsubject` INT NOT NULL,
  PRIMARY KEY (`idmodule`),
  INDEX `fk_module_subject1_idx` (`subject_idsubject` ASC) VISIBLE,
  CONSTRAINT `fk_module_subject1`
    FOREIGN KEY (`subject_idsubject`)
    REFERENCES `school`.`subject` (`idsubject`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`notes` (
  `idnotes` INT NOT NULL AUTO_INCREMENT,
  `notes_type` LONGTEXT NOT NULL,
  `subject_idsubject` INT NOT NULL,
  `student_idstudent` INT NOT NULL,
  PRIMARY KEY (`idnotes`),
  INDEX `fk_notes_subject1_idx` (`subject_idsubject` ASC) VISIBLE,
  INDEX `fk_notes_student1_idx` (`student_idstudent` ASC) VISIBLE,
  CONSTRAINT `fk_notes_student1`
    FOREIGN KEY (`student_idstudent`)
    REFERENCES `school`.`student` (`idstudent`),
  CONSTRAINT `fk_notes_subject1`
    FOREIGN KEY (`subject_idsubject`)
    REFERENCES `school`.`subject` (`idsubject`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `school`.`notification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `school`.`notification` (
  `idnotification` INT NOT NULL AUTO_INCREMENT,
  `notification_type` VARCHAR(100) NOT NULL,
  `notification_content` VARCHAR(100) NOT NULL,
  `messages_idmessages` INT NOT NULL,
  PRIMARY KEY (`idnotification`),
  INDEX `fk_notification_messages1_idx` (`messages_idmessages` ASC) VISIBLE,
  CONSTRAINT `fk_notification_messages1`
    FOREIGN KEY (`messages_idmessages`)
    REFERENCES `school`.`messages` (`idmessages`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
