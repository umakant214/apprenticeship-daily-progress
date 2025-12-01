create database Shop;
use Shop;
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Category VARCHAR(30),
    Price DECIMAL(10,2),
    Stock INT,
    Brand VARCHAR(50),
    Rating DECIMAL(2,1),
    Supplier VARCHAR(50)
);

INSERT INTO Products (ProductID, ProductName, Category, Price, Stock, Brand, Rating, Supplier) VALUES
(1, 'Pen', 'Stationery', 10, 500, 'Cello', 4.2, 'OfficeMart'),
(2, 'Laptop', 'Electronics', 55000, 30, 'HP', 4.5, 'TechWorld'),
(3, 'Chair', 'Furniture', 1200, 80, 'Nilkamal', 4.1, 'HomePlus'),
(4, 'Bottle', 'Kitchen', 150, 200, 'Milton', 4.4, 'DailyStore'),
(5, 'Notebook', 'Stationery', 60, 400, 'Classmate', 4.3, 'OfficeMart'),
(6, 'Headphones', 'Electronics', 1800, 50, 'Boat', 4.6, 'TechWorld'),
(7, 'Table', 'Furniture', 4500, 25, 'Godrej', 4.2, 'HomePlus'),
(8, 'Frying Pan', 'Kitchen', 850, 100, 'Prestige', 4.5, 'DailyStore'),
(9, 'Marker', 'Stationery', 25, 350, 'Camlin', 4.0, 'OfficeMart'),
(10, 'Smartphone', 'Electronics', 28000, 40, 'Samsung', 4.7, 'TechWorld'),
(11, 'Sofa', 'Furniture', 15000, 10, 'Durian', 4.5, 'HomePlus'),
(12, 'Lunch Box', 'Kitchen', 300, 150, 'Tupperware', 4.3, 'DailyStore'),
(13, 'Glue Stick', 'Stationery', 20, 500, 'Fevicol', 4.1, 'OfficeMart'),
(14, 'Monitor', 'Electronics', 9000, 35, 'Dell', 4.6, 'TechWorld'),
(15, 'Bookshelf', 'Furniture', 3200, 15, 'IKEA', 4.4, 'HomePlus'),
(16, 'Mixer', 'Kitchen', 2500, 60, 'Philips', 4.5, 'DailyStore');


select * from Products where Category='Electronics';

select * from Products where Price>5000

select * from Products where Stock<50;

select * from Products where Brand='Milton';

select *from Products where ProductName like 'M%' 

select * from Products where Price between 100 And 1000;

select * from products where Rating >4.5;

SELECT *FROM Products WHERE Category != 'Furniture';
select * from Products where Supplier='TechWorld';

select * from Products where ProductName like '%Box%'

SELECT * FROM Products WHERE (Price + 100) > 2000;

SELECT * FROM Products WHERE (Stock - 20) < 100;

select * from Products where Brand like '%a%';

select * from Products where price<500;

select * from Products where Rating<4.2;

select * from Products where ProductName like '%er';

select * from Products where (Price*2)>10000;

select * from Products where Brand <> 'HP';

select * from Products where Stock>300 And Category='Stationery';

select * from Products where (Price/2)<1000;
