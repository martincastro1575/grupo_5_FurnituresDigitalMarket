CREATE DATABASE  IF NOT EXISTS `furnituresdigitalmarket_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `furnituresdigitalmarket_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: furnituresdigitalmarket_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `action_type`
--

DROP TABLE IF EXISTS `action_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `action_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_type`
--

LOCK TABLES `action_type` WRITE;
/*!40000 ALTER TABLE `action_type` DISABLE KEYS */;
INSERT INTO `action_type` VALUES (1,'Insertar','Inserta un nuevo registro','2021-10-02 15:43:33'),(2,'Modificar','Modifica el registro seleccionado','2021-10-02 15:43:33'),(3,'Consultar','Consulta uno o mas registros','2021-10-02 15:44:14'),(4,'Elminar','Eliminar un producto','2021-10-02 15:44:14');
/*!40000 ALTER TABLE `action_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(500) NOT NULL,
  `id_user` int DEFAULT NULL,
  `is_address_bill` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'cra 65 #169A',2,0),(2,'cra 68 #169A',3,1);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `id_product` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_image_idx` (`id_product`),
  CONSTRAINT `id_product_image` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'imaen-ducha.jpg',5),(2,'mueble-cocina.jpg',6),(3,'sillon-2-cuerpos.png',7),(4,'baño3.png',8),(5,'baño2.png',9),(6,'baño1.png',10),(7,'baño3.png',11),(8,'baño2.png',12),(9,'baño1.png',13),(10,'baño3.png',14),(11,'prod-1629242001540.png',15),(12,'sala1.png',16),(13,'sala2.png',17),(14,'sala3.png',18),(15,'sala1.png',19),(16,'sala2.png',20),(17,'sala3.png',21),(18,'prod-1633985991185.png',30),(19,'prod-1633986069947.jpg',31);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_method`
--

DROP TABLE IF EXISTS `payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_method` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `is_active` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `high` int DEFAULT '0',
  `width` int DEFAULT '0',
  `length` int DEFAULT '0',
  `price` decimal(10,2) NOT NULL,
  `discount` int DEFAULT '0',
  `quantity` int NOT NULL DEFAULT '0',
  `stock_min` int DEFAULT '0',
  `stock_max` int DEFAULT '0',
  `id_status` int DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_status_idx` (`id_status`),
  KEY `id_status_product_idx` (`id_status`),
  KEY `id_category_idx` (`id_category`),
  CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `products_category` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_status_product` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'dddd','dd',0,0,0,222.00,2,2,2,2,NULL,1,'2021-10-01 23:49:20'),(6,'sss','sss',4,4,4,4.00,4,4,4,4,NULL,2,'2021-10-01 23:50:27'),(7,'Nuevo Producto','eeee',0,0,0,2.00,2,2,2,2,NULL,4,'2021-10-02 12:24:18'),(8,'Modulo de Juego Completo','2222',0,0,0,0.00,0,0,0,0,NULL,3,'2021-10-02 12:32:58'),(9,'Modulo de Juego Completo','2222',0,0,0,0.00,0,0,0,0,NULL,3,'2021-10-02 12:33:53'),(10,'Modulo de Juego Completo','2222',0,0,0,0.00,0,0,0,0,NULL,3,'2021-10-02 12:33:58'),(11,'ddd','ddd',0,0,0,0.00,0,0,0,0,NULL,4,'2021-10-02 12:34:39'),(12,'Set Comedor NUEVO','ddd',0,0,0,0.00,0,0,0,0,NULL,2,'2021-10-02 13:03:21'),(13,'sss','ssss',0,0,0,0.00,0,0,0,0,NULL,1,'2021-10-02 13:37:16'),(14,'Nuevo Producto','fdsf',0,0,0,111.00,111,111,111,111,NULL,2,'2021-10-02 13:38:06'),(15,'Modulo de Juego Completo','fdsfdsf',0,0,0,8.00,8,8,8,8,NULL,4,'2021-10-02 13:40:31'),(16,'Modulo de Juego Completo','ssss',0,0,0,2.00,2,2,2,2,NULL,4,'2021-10-02 13:44:30'),(17,'Modulo de Juego Completo','ddd',0,0,0,1.00,1,1,1,1,NULL,2,'2021-10-02 14:00:39'),(18,'Set Comedor NUEVO','dddd',0,0,0,9.00,9,9,9,9,NULL,2,'2021-10-02 15:20:31'),(19,'Set Comedor NUEVO','mkmkmk',0,0,0,7.00,7,7,7,7,NULL,1,'2021-10-02 15:28:30'),(20,'Nuevo Producto','sss',0,0,0,0.00,0,0,0,0,NULL,3,'2021-10-02 17:13:03'),(21,'Nuevo Producto','sss',0,0,0,0.00,0,0,0,0,NULL,4,'2021-10-02 17:15:59'),(22,'Modulo de Juego Completo','hhh',0,0,0,0.00,0,0,0,0,NULL,3,'2021-10-02 17:18:21'),(23,'Set Comedor NUEVO','ddd',0,0,0,0.00,0,0,0,0,NULL,2,'2021-10-02 17:21:03'),(24,'Set Comedor NUEVO','sss',0,0,0,0.00,0,0,0,0,NULL,1,'2021-10-02 17:24:03'),(25,'Modulo de Juego Completo','fdsfdsf',0,0,0,8.00,8,8,8,8,NULL,3,'2021-10-02 13:40:31'),(26,'Modulo de Juego Completo','fdsfdsf',0,0,0,8.00,8,8,8,8,NULL,1,'2021-10-02 13:40:31'),(27,'Modulo de Juego Completo','fdsfdsf',0,0,0,8.00,8,8,8,8,NULL,2,'2021-10-02 13:40:31'),(28,'Modulo de Juego Completo','fdsfdsf',0,0,0,8.00,8,8,8,8,NULL,4,'2021-10-02 13:40:31'),(29,'Modulo de Juego Completo','fdsfdsf',0,0,0,8.00,8,8,8,8,NULL,4,'2021-10-02 13:40:31'),(30,'Any ','Hola',50,10,20,10.00,0,100,2,8,NULL,1,'2021-10-11 20:59:51'),(31,'Mueble negro','hola',20,10,10,200.00,0,100,1,8,NULL,4,'2021-10-11 21:01:09');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_action_type`
--

DROP TABLE IF EXISTS `products_action_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_action_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_product_action` int DEFAULT NULL,
  `id_action_type` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_action_idx` (`id_product_action`),
  KEY `id_action_type_idx` (`id_action_type`),
  CONSTRAINT `id_action_type` FOREIGN KEY (`id_action_type`) REFERENCES `action_type` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_product_action` FOREIGN KEY (`id_product_action`) REFERENCES `products` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_action_type`
--

LOCK TABLES `products_action_type` WRITE;
/*!40000 ALTER TABLE `products_action_type` DISABLE KEYS */;
INSERT INTO `products_action_type` VALUES (1,NULL,NULL,'2021-10-02 17:21:03',34),(2,NULL,1,'2021-10-02 17:24:04',34),(3,30,1,'2021-10-11 20:59:51',50),(4,31,1,'2021-10-11 21:01:09',50);
/*!40000 ALTER TABLE `products_action_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_category`
--

DROP TABLE IF EXISTS `products_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `is_active` tinyint DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_category`
--

LOCK TABLES `products_category` WRITE;
/*!40000 ALTER TABLE `products_category` DISABLE KEYS */;
INSERT INTO `products_category` VALUES (1,'cocina','Productos para cocina',0,'2021-09-30 06:56:37'),(2,'baño','Productos para el baño',0,'2021-09-30 06:56:37'),(3,'sala','Productos para sala',0,'2021-09-30 06:57:19'),(4,'cuarto','Productos para el cuarto',0,'2021-09-30 06:57:19'),(5,'masvendidos','Productos más vendidos',0,'2021-09-30 07:57:19'),(6,'ofertasemana','Productos ofertas de la semana',0,'2021-09-30 07:57:19');
/*!40000 ALTER TABLE `products_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_status` int DEFAULT NULL,
  `id_payment` int DEFAULT NULL,
  `id_address` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_user_purchase_idx` (`id_user`),
  KEY `id_status_idx` (`id_status`),
  KEY `id_status_purchase_idx` (`id_status`),
  KEY `id_payment_idx` (`id_payment`),
  KEY `id_address_idx` (`id_address`),
  CONSTRAINT `id_address` FOREIGN KEY (`id_address`) REFERENCES `address` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_payment` FOREIGN KEY (`id_payment`) REFERENCES `payment_method` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_status_purchase` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_user_purchase` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_detail`
--

DROP TABLE IF EXISTS `purchase_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_purchase` int NOT NULL,
  `id_product` int NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product_idx` (`id_product`),
  KEY `id_purchase` (`id_purchase`),
  CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `id_purchase` FOREIGN KEY (`id_purchase`) REFERENCES `purchase` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_detail`
--

LOCK TABLES `purchase_detail` WRITE;
/*!40000 ALTER TABLE `purchase_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user_cart_idx` (`id_user`),
  CONSTRAINT `id_user_cart` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart_detail`
--

DROP TABLE IF EXISTS `shopping_cart_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_cart_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int NOT NULL,
  `discount` int DEFAULT '0',
  `category` varchar(50) DEFAULT NULL,
  `description` text,
  `id_shopping_cart` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_shopping_cart` FOREIGN KEY (`id`) REFERENCES `shopping_cart` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart_detail`
--

LOCK TABLES `shopping_cart_detail` WRITE;
/*!40000 ALTER TABLE `shopping_cart_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_cart_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL,
  `dominio` enum('USER','PRODUCT','BUY') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'activo','el producto esta disponible','PRODUCT'),(2,'inactivo','el producto esta disponible','PRODUCT'),(3,'activo','usuario activo','USER'),(4,'inactivo','usuario inactivo','USER');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `password` varchar(500) NOT NULL,
  `image` text,
  `id_role` int DEFAULT NULL,
  `id_status` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_role_idx` (`id_role`),
  KEY `id_status_idx` (`id_status`),
  CONSTRAINT `id_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Martin','castro','Male','martin.castro1575@gmail.com','3117364159','1975-09-15','$2a$12$yUs17GPoLEeKYfm3ioi8nu/fIi/oYOT4g9n3ZbFIOlyPBEe3HRFYu',NULL,1,1,'2021-10-05 00:47:19'),(3,'Niurka','Rosas','Female','ing3@gmail.com','3117364159','1990-02-02','$2a$12$yUs17GPoLEeKYfm3ioi8nu/fIi/oYOT4g9n3ZbFIOlyPBEe3HRFYu',NULL,1,1,'2021-10-05 00:47:19'),(50,'Niurka','Rosas','Female','ing.niurkarosas@gmail.com','3117364159','1990-02-02','$2a$12$yUs17GPoLEeKYfm3ioi8nu/fIi/oYOT4g9n3ZbFIOlyPBEe3HRFYu',NULL,2,1,'2021-10-05 00:47:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_action_type`
--

DROP TABLE IF EXISTS `users_action_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_action_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_action` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `id_admin` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_action_idx` (`id_action`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_admin_idx` (`id_admin`),
  CONSTRAINT `id_action` FOREIGN KEY (`id_action`) REFERENCES `action_type` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_admin_action` FOREIGN KEY (`id_admin`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `id_user_action` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_action_type`
--

LOCK TABLES `users_action_type` WRITE;
/*!40000 ALTER TABLE `users_action_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_action_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'furnituresdigitalmarket_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-11 20:46:36
