-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2024 at 04:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fmms_reactproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `new`
--

CREATE TABLE `new` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `deatils` varchar(255) NOT NULL,
  `bname` varchar(50) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new`
--

INSERT INTO `new` (`id`, `title`, `deatils`, `bname`, `photo`) VALUES
(1, 'New Arrivals', 'Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!', 'Shop now', 'arrival-bg.jpg'),
(3, 'Spring', 'asdfsdfjhgrugf,kddffuyuyrfsdcyuf,sdkyu', 'buy now', 'arrival-bg.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `btnone` varchar(50) NOT NULL,
  `btntwo` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `btnone`, `btntwo`, `title`, `price`, `photo`) VALUES
(1, 'Add To Cart', 'Buy Now', 'Men\'s Shirt', '80', 'p1.png'),
(4, 'Add to cart', 'Buy Now', 'Women dress', '88', 'p3.png'),
(6, 'Add to Cart ', 'Buy Now ', 'Men Shirt', '140', 'p8.png'),
(7, 'Add to Cart', 'Shop Now', 'Women dress', '150', 'p12.png'),
(8, 'Add to cart ', 'Buy Now ', 'Men Shirt', '60', 'p2.png'),
(9, 'Add to cart ', 'Buy Now', 'Women Dress', '50', 'p4.png'),
(10, 'Add to Cart', ' Buy Now', 'Men Shirt', '70', 'p10.png'),
(11, 'Add to Cart ', 'Shop Now', 'Women Dress', '150', 'p6.png'),
(12, 'Add to Cart ', 'Buy Now', 'Men Shirt', '40', 'p11.png');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `title` varchar(55) NOT NULL,
  `details` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `title`, `details`) VALUES
(1, '40% Discount', 'For only tshirt'),
(2, '70% discount', 'For Mens Collection '),
(5, 'Foysal', 'fsdgfvgdfv,aft sdytrfsdm,');

-- --------------------------------------------------------

--
-- Table structure for table `subscribe`
--

CREATE TABLE `subscribe` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `deatils` varchar(255) NOT NULL,
  `bname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribe`
--

INSERT INTO `subscribe` (`id`, `title`, `deatils`, `bname`) VALUES
(3, 'Subscribe and  Follow our site for get offer', 'it is djhgfasgfhf aksdjfhk n ashyjtcjLKaJDI AUERYT', 'press');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `deatils` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `title`, `deatils`, `name`, `photo`) VALUES
(1, 'Customer', 'Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.', 'Anna Trevor', 'client.jpg'),
(2, 'Manager', 'dfgkijsdfigu ysduigh,ksadgud ygtuf,ksdifuyudgy', 'Jui', 'client.jpg'),
(3, 'Director', 'asdfjkl;adf jkl; asdf jkl;qwwerpouojzjnlkdmfj', 'Fuji', 'client.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `with`
--

CREATE TABLE `with` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `details` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `with`
--

INSERT INTO `with` (`id`, `title`, `details`, `photo`) VALUES
(1, 'First delivery', 'ahsgfdfd,djhfgvgm', 'fast.jpg'),
(4, '40% discount', 'asdfsdjhg,alkghjsdgf', 'fast.jpg'),
(6, 'ahsgdfhsdgaf', 'aewfasdfgdf,ergdfgh', 'fast.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new`
--
ALTER TABLE `new`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribe`
--
ALTER TABLE `subscribe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `with`
--
ALTER TABLE `with`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `new`
--
ALTER TABLE `new`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subscribe`
--
ALTER TABLE `subscribe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `with`
--
ALTER TABLE `with`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
