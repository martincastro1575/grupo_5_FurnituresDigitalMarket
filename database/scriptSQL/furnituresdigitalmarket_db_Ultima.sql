-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2021 a las 23:27:46
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `furnituresdigitalmarket_db`
--
CREATE DATABASE IF NOT EXISTS `furnituresdigitalmarket_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `furnituresdigitalmarket_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `action_type`
--

CREATE TABLE `action_type` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `action_type`
--

INSERT INTO `action_type` (`id`, `name`, `description`, `created_at`) VALUES
(1, 'Insertar', 'Inserta un nuevo registro', '2021-10-02 15:43:33'),
(2, 'Modificar', 'Modifica el registro seleccionado', '2021-10-02 15:43:33'),
(3, 'Consultar', 'Consulta uno o mas registros', '2021-10-02 15:44:14'),
(4, 'Elminar', 'Eliminar un producto', '2021-10-02 15:44:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `is_address_bill` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `address`
--

INSERT INTO `address` (`id`, `description`, `id_user`, `is_address_bill`) VALUES
(1, 'cra 65 #169A', 2, 0),
(2, 'cra 68 #169A', 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_product` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `id_product`) VALUES
(1, 'imaen-ducha.jpg', 5),
(2, 'mueble-cocina.jpg', 6),
(3, 'sillon-2-cuerpos.png', 7),
(4, 'baño3.png', 8),
(5, 'baño2.png', 9),
(6, 'baño1.png', 10),
(7, 'baño3.png', 11),
(8, 'baño2.png', 12),
(9, 'baño1.png', 13),
(10, 'baño3.png', 14),
(11, 'sala20.png', 15),
(12, 'sala21.png', 16),
(13, 'sala22.png', 17),
(14, 'sala23.png', 18),
(15, 'sala24.png', 19),
(16, 'sala25.png', 20),
(17, 'sala26.png', 21),
(18, 'sala27.png', 30),
(19, 'sala28.png', 31),
(20, 'sala29.png', 22),
(21, 'sala30.png', 23),
(22, 'sala21.png', 24),
(23, 'cuarto20.png', 25),
(24, 'cuarto21.png', 26),
(25, 'cuarto22.png', 27),
(26, 'cuarto24.png', 28),
(27, 'banio20.png', 29),
(28, 'banio21.png', 30),
(29, 'banio22.png', 31),
(30, 'banio23.png', 32);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `high` int(11) DEFAULT 0,
  `width` int(11) DEFAULT 0,
  `length` int(11) DEFAULT 0,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `stock_min` int(11) DEFAULT 0,
  `stock_max` int(11) DEFAULT 0,
  `id_status` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `high`, `width`, `length`, `price`, `discount`, `quantity`, `stock_min`, `stock_max`, `id_status`, `id_category`, `created_at`) VALUES
(5, 'Ducha para baño', 'Ducha para baño de pared, cormada monomando', 0, 0, 0, '222.00', 2, 2, 2, 2, NULL, 1, '2021-10-01 23:49:20'),
(6, 'Gavetero de cocina', 'Gavetero de cocina, organizador. Color turquesa', 4, 4, 4, '450.00', 4, 4, 4, 4, NULL, 2, '2021-10-01 23:50:27'),
(7, 'Muble para sala', 'Muble para sala, color beige de tres puestos de semi-piel', 0, 0, 0, '250.00', 2, 2, 2, 2, NULL, 4, '2021-10-02 12:24:18'),
(8, 'Bacha para baños', 'Bacha para baños, blaco de ceramica con accesorios incluido.', 0, 0, 0, '200.00', 0, 20, 1, 20, NULL, 3, '2021-10-02 12:32:58'),
(9, 'Bacha para Baños', 'Bacha para baños de ceramica de color marrón oscuro con accesorios incluidos', 0, 0, 0, '500.00', 10, 200, 30, 200, NULL, 3, '2021-10-02 12:33:53'),
(10, 'Bacha para baños doble', 'Bacha para baños doble de ceramica de color blanco con accesorios incluidos', 0, 0, 0, '600.00', 5, 20, 1, 20, NULL, 2, '2021-10-02 12:33:58'),
(11, 'Bacha blanca de ceramica', 'Bacha blanca de ceramica sobre soporte de madera con accesorios incluidos', 0, 0, 0, '700.00', 5, 65, 1, 20, NULL, 4, '2021-10-02 12:34:39'),
(12, 'Bacha de Marmol', 'Bacha de Marmol, con accesorios incluidos.', 0, 0, 0, '300.00', 30, 20, 1, 10, NULL, 2, '2021-10-02 13:03:21'),
(13, 'Bacha gemela para baños', 'Bacha gemela para baños, incluye todos los accesorios', 0, 0, 0, '250.00', 10, 30, 5, 10, NULL, 1, '2021-10-02 13:37:16'),
(14, 'Bacha Plateada', 'Bacha Plateada con accesorios incluidos.', 0, 0, 0, '111.00', 111, 111, 111, 111, NULL, 2, '2021-10-02 13:38:06'),
(15, 'Juego de Comedor fanatasy', 'Juego de Comedor fanatasy, incluye sillas y cojines', 0, 0, 0, '8.00', 8, 8, 8, 8, NULL, 4, '2021-10-02 13:40:31'),
(16, 'Juego de Sillas para cocina', 'Juego de Sillas para cocina, en distintos colores', 0, 0, 0, '2.00', 2, 2, 2, 2, NULL, 4, '2021-10-02 13:44:30'),
(17, 'Modulo de entretenimiento', 'Modulo de entretenimiento familiar, con esquinero incluido', 0, 0, 0, '1.00', 1, 1, 1, 1, NULL, 2, '2021-10-02 14:00:39'),
(18, 'Juego de comedor', 'Juego de comedor con mesa de vidrio', 0, 0, 0, '9.00', 9, 9, 9, 9, NULL, 2, '2021-10-02 15:20:31'),
(19, 'Modulo de juego', 'Modulo de juego familiar para espacios abiertos.', 0, 0, 0, '7.00', 7, 7, 7, 7, NULL, 1, '2021-10-02 15:28:30'),
(20, 'Mueble Vintage', 'Mueble Vintage turquesa', 0, 0, 0, '0.00', 0, 0, 0, 0, NULL, 3, '2021-10-02 17:13:03'),
(21, 'Modulos Cocina', 'Modulos Cocina Blanco brillante', 0, 0, 0, '0.00', 0, 0, 0, 0, NULL, 4, '2021-10-02 17:15:59'),
(22, 'Comedor Familiar', 'Comedor Familiar marron para 8 personas', 0, 0, 0, '200.00', 2, 1, 1, 1, NULL, 3, '2021-10-02 17:18:21'),
(23, 'Divisor de espacios', 'Divisor de espacios de vidrio moderno.', 0, 0, 0, '500.00', 10, 20, 1, 20, NULL, 2, '2021-10-02 17:21:03'),
(24, 'Sillas de mimbre', 'Sillas de mimbre metalica', 0, 0, 0, '100.00', 1, 20, 3, 0, NULL, 1, '2021-10-02 17:24:03'),
(25, 'Cuarto modular', 'Cuarto modular para niñas', 0, 0, 0, '200.00', 10, 1, 1, 20, NULL, 3, '2021-10-02 13:40:31'),
(26, 'Modulo de Juego Completo', 'fdsfdsf', 0, 0, 0, '8.00', 8, 8, 8, 8, NULL, 1, '2021-10-02 13:40:31'),
(27, 'Modulo de Juego Completo', 'fdsfdsf', 0, 0, 0, '8.00', 8, 8, 8, 8, NULL, 2, '2021-10-02 13:40:31'),
(28, 'Modulo de Juego Completo', 'fdsfdsf', 0, 0, 0, '8.00', 8, 8, 8, 8, NULL, 4, '2021-10-02 13:40:31'),
(29, 'Modulo de Juego Completo', 'fdsfdsf', 0, 0, 0, '8.00', 8, 8, 8, 8, NULL, 4, '2021-10-02 13:40:31'),
(30, 'Any ', 'Hola', 50, 10, 20, '10.00', 0, 100, 2, 8, NULL, 1, '2021-10-11 20:59:51'),
(31, 'Mueble negro', 'hola', 20, 10, 10, '200.00', 0, 100, 1, 8, NULL, 4, '2021-10-11 21:01:09'),
(32, 'Modulo de Juego Completo 2025', 'Mueble esquimero de piel negra, ideal para salas amplias.', 3, 12, 1, '479000.00', 9, 4, 1, 8, NULL, 1, '2021-11-15 10:02:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_action_type`
--

CREATE TABLE `products_action_type` (
  `id` int(11) NOT NULL,
  `id_product_action` int(11) DEFAULT NULL,
  `id_action_type` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products_action_type`
--

INSERT INTO `products_action_type` (`id`, `id_product_action`, `id_action_type`, `created_at`, `id_user`) VALUES
(1, NULL, NULL, '2021-10-02 17:21:03', 34),
(2, NULL, 1, '2021-10-02 17:24:04', 34),
(3, 30, 1, '2021-10-11 20:59:51', 50),
(4, 31, 1, '2021-10-11 21:01:09', 50),
(5, 32, 1, '2021-11-15 10:02:38', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_category`
--

CREATE TABLE `products_category` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products_category`
--

INSERT INTO `products_category` (`id`, `title`, `description`, `is_active`, `created_at`) VALUES
(1, 'cocina', 'Productos para cocina', 0, '2021-09-30 06:56:37'),
(2, 'baño', 'Productos para el baño', 0, '2021-09-30 06:56:37'),
(3, 'sala', 'Productos para sala', 0, '2021-09-30 06:57:19'),
(4, 'cuarto', 'Productos para el cuarto', 0, '2021-09-30 06:57:19'),
(5, 'masvendidos', 'Productos más vendidos', 0, '2021-09-30 07:57:19'),
(6, 'ofertasemana', 'Productos ofertas de la semana', 0, '2021-09-30 07:57:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase`
--

CREATE TABLE `purchase` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_status` int(11) DEFAULT NULL,
  `id_payment` int(11) DEFAULT NULL,
  `id_address` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase_detail`
--

CREATE TABLE `purchase_detail` (
  `id` int(11) NOT NULL,
  `id_purchase` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_cart_detail`
--

CREATE TABLE `shopping_cart_detail` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL,
  `discount` int(11) DEFAULT 0,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_shopping_cart` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dominio` enum('USER','PRODUCT','BUY') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id`, `name`, `description`, `dominio`) VALUES
(1, 'activo', 'el producto esta disponible', 'PRODUCT'),
(2, 'inactivo', 'el producto esta disponible', 'PRODUCT'),
(3, 'activo', 'usuario activo', 'USER'),
(4, 'inactivo', 'usuario inactivo', 'USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('Male','Female','Other') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `password` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_role` int(11) DEFAULT NULL,
  `id_status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `gender`, `email`, `phone`, `birthdate`, `password`, `image`, `id_role`, `id_status`, `created_at`) VALUES
(2, 'Martin', 'castro', 'Male', 'martin.castro1575@gmail.com', '3117364159', '1975-09-15', '$2a$12$.aRdSVjCjmM7pVPCxKL58unAYnee15HOJKqIasc5DVUeohI8jdCAu', NULL, 1, 1, '2021-10-05 00:47:19'),
(3, 'Niurka', 'Rosas', 'Female', 'ing3@gmail.com', '3117364159', '1990-02-02', '$2a$12$yUs17GPoLEeKYfm3ioi8nu/fIi/oYOT4g9n3ZbFIOlyPBEe3HRFYu', NULL, 1, 1, '2021-10-05 00:47:19'),
(50, 'Niurka', 'Rosas', 'Female', 'ing.niurkarosas@gmail.com', '3117364159', '1990-02-02', '$2a$12$yUs17GPoLEeKYfm3ioi8nu/fIi/oYOT4g9n3ZbFIOlyPBEe3HRFYu', NULL, 2, 1, '2021-10-05 00:47:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_action_type`
--

CREATE TABLE `users_action_type` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `id_action` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_admin` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `action_type`
--
ALTER TABLE `action_type`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_idx` (`id_user`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product_image_idx` (`id_product`);

--
-- Indices de la tabla `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status_idx` (`id_status`),
  ADD KEY `id_status_product_idx` (`id_status`),
  ADD KEY `id_category_idx` (`id_category`);

--
-- Indices de la tabla `products_action_type`
--
ALTER TABLE `products_action_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product_action_idx` (`id_product_action`),
  ADD KEY `id_action_type_idx` (`id_action_type`);

--
-- Indices de la tabla `products_category`
--
ALTER TABLE `products_category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_idx` (`id_user`),
  ADD KEY `id_user_purchase_idx` (`id_user`),
  ADD KEY `id_status_idx` (`id_status`),
  ADD KEY `id_status_purchase_idx` (`id_status`),
  ADD KEY `id_payment_idx` (`id_payment`),
  ADD KEY `id_address_idx` (`id_address`);

--
-- Indices de la tabla `purchase_detail`
--
ALTER TABLE `purchase_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product_idx` (`id_product`),
  ADD KEY `id_purchase` (`id_purchase`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user_cart_idx` (`id_user`);

--
-- Indices de la tabla `shopping_cart_detail`
--
ALTER TABLE `shopping_cart_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role_idx` (`id_role`),
  ADD KEY `id_status_idx` (`id_status`);

--
-- Indices de la tabla `users_action_type`
--
ALTER TABLE `users_action_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_action_idx` (`id_action`),
  ADD KEY `id_user_idx` (`id_user`),
  ADD KEY `id_admin_idx` (`id_admin`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `action_type`
--
ALTER TABLE `action_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `products_action_type`
--
ALTER TABLE `products_action_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products_category`
--
ALTER TABLE `products_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `purchase_detail`
--
ALTER TABLE `purchase_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `shopping_cart_detail`
--
ALTER TABLE `shopping_cart_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `users_action_type`
--
ALTER TABLE `users_action_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `id_product_image` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `products_category` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_status_product` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `products_action_type`
--
ALTER TABLE `products_action_type`
  ADD CONSTRAINT `id_action_type` FOREIGN KEY (`id_action_type`) REFERENCES `action_type` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_product_action` FOREIGN KEY (`id_product_action`) REFERENCES `products` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `id_address` FOREIGN KEY (`id_address`) REFERENCES `address` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_payment` FOREIGN KEY (`id_payment`) REFERENCES `payment_method` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_status_purchase` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_user_purchase` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `purchase_detail`
--
ALTER TABLE `purchase_detail`
  ADD CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `id_purchase` FOREIGN KEY (`id_purchase`) REFERENCES `purchase` (`id`);

--
-- Filtros para la tabla `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `id_user_cart` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `shopping_cart_detail`
--
ALTER TABLE `shopping_cart_detail`
  ADD CONSTRAINT `id_shopping_cart` FOREIGN KEY (`id`) REFERENCES `shopping_cart` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `id_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `users_action_type`
--
ALTER TABLE `users_action_type`
  ADD CONSTRAINT `id_action` FOREIGN KEY (`id_action`) REFERENCES `action_type` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_admin_action` FOREIGN KEY (`id_admin`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `id_user_action` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
