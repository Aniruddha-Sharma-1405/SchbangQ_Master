
-- MySQL dump 10.13  Distrib 8.0.29, for macos12.2 (arm64)
--
-- Host: localhost    Database: schbangq
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-29 16:12:57

DROP TABLE IF EXISTS `cusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cusers` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(100) NOT NULL, 
    `last_name` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `pass` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `cusers` WRITE;
/*!40000 ALTER TABLE `cusers` DISABLE KEYS */;
INSERT INTO `cusers` VALUES (1,'cf1','cl1','c@gmail.com','abc');

/*!40000 ALTER TABLE `cusers` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `eusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eusers` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(100) NOT NULL,
    `last_name` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `pass` varchar(100) NOT NULL,
    `des` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `eusers` WRITE;
/*!40000 ALTER TABLE `eusers` DISABLE KEYS */;
INSERT INTO `eusers` VALUES (1,'ef1','el1','e@gmail.com','abc','sa'),(2,'ef2','el2','e2@gmail.com','abc2','a'),(3,'ef3','el3','e3@gmail.com','abc3','e'),(4,'ef4','el4','e4@gmail.com','abc4','sa');
/*!40000 ALTER TABLE `eusers` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `satables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `satables` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `service` varchar(100) NOT NULL,
    `otask` varchar(100) NOT NULL,
    `ctask` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `satables` WRITE;
/*!40000 ALTER TABLE `satables` DISABLE KEYS */;
INSERT INTO `satables` VALUES (1,'e@gmail.com','Service1','2','3');

/*!40000 ALTER TABLE `satables` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `atables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atables` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `name` varchar(100) NOT NULL,
    `otask` varchar(100) NOT NULL,
    `ctask` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `atables` WRITE;
/*!40000 ALTER TABLE `atables` DISABLE KEYS */;
INSERT INTO `atables` VALUES (1,'e@gmail.com','Aniruddha Sharma','otask','ctask');

/*!40000 ALTER TABLE `atables` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `sagraph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sagraph` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `month` varchar(100) NOT NULL,
    `cservices` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `sagraph` WRITE;
/*!40000 ALTER TABLE `sagraph` DISABLE KEYS */;
INSERT INTO `sagraph` VALUES (1,'e@gmail.com','May','102');

/*!40000 ALTER TABLE `sagraph` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `agraph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agraph` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `month` varchar(100) NOT NULL,
    `cservices` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `agraph` WRITE;
/*!40000 ALTER TABLE `agraph` DISABLE KEYS */;
INSERT INTO `agraph` VALUES (1,'e@gmail.com','May','34');

/*!40000 ALTER TABLE `agraph` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `epage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `epage` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `email` varchar(100) NOT NULL,
    `tip` varchar(100) NOT NULL,
    `tc` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `epage` WRITE;
/*!40000 ALTER TABLE `epage` DISABLE KEYS */;
INSERT INTO `epage` VALUES (1,'e@gmail.com','20','95');

/*!40000 ALTER TABLE `epage` ENABLE KEYS */;
UNLOCK TABLES;
