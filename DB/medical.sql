-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2022 at 04:01 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medical`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `UserName` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `FName` varchar(30) NOT NULL,
  `SurName` varchar(30) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Address` varchar(10) NOT NULL,
  `Suburb` varchar(10) NOT NULL,
  `Postcode` varchar(4) NOT NULL,
  `State` varchar(3) NOT NULL,
  `Phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`UserName`, `Password`, `Email`, `FName`, `SurName`, `Gender`, `Address`, `Suburb`, `Postcode`, `State`, `Phone`) VALUES
('Johnmathew', 'B1d0VSsNQ@@q', 'john@abc.com', 'Saravanan', 'Thangavel', 'M', '123', 'benken', '3149', '7', '0431826516'),
('Johnmathew', '8ySKfwI$#IM6', 'john@abc.com', 'Saravanan', 'Thangavel', 'M', '123', 'benken', '3149', '7', '0431826516'),
('Johnmathew', '19xMvA#eT3aE', 'john@abc.com', 'Saravanan', 'Thangavel', 'M', '123', 'benken', '3149', '7', '0431826516');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
