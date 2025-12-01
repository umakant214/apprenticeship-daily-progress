use techpile;
create table Orders ( 
OrderID INT PRIMARY KEY IDENTITY(1,1), 
CustomerName VARCHAR(100), 
ProductName VARCHAR(100), 
Quantity INT, 
OrderDate DATE, 
TotalAmount DECIMAL(10,2) 
);

insert into Orders (CustomerName, ProductName, Quantity, OrderDate, TotalAmount)values 
('Amit Sharma', 'Laptop Pro 14', 1, '2024-01-05', 75000), 
('Riya Khanna', 'Smartphone X10', 1, '2024-01-08', 35000), 
('Vikas Mehta', 'LED TV 55 Inch', 1, '2024-02-12', 55000), 
('Sneha Patel', 'Bluetooth Headphones', 2, '2024-02-18', 5000), 
('Raj Verma', 'Office Chair Deluxe', 1, '2024-02-20', 7000), 
('Anuj Singh', 'Gaming Mouse', 3, '2024-03-01', 4500), 
('Priya Jain', 'Wooden Study Table', 1, '2024-03-05', 6500), 
('Manish Gupta', 'Air Conditioner 1.5 Ton', 1, '2024-03-10', 42000), 
('Karan Arora', 'Smartwatch S2', 1, '2024-03-14', 5000), 
('Nisha Yadav', 'Refrigerator 300L', 1, '2024-03-20', 28000), 
('Rohit Saxena', 'Table Lamp LED', 2, '2024-03-28', 1600), 
('Megha Kapoor', 'Backpack Pro', 1, '2024-04-02', 1200), 
('Tarun Batra', 'Water Bottle Steel', 4, '2024-04-06', 2000), 
('Sakshi Rana', 'Notebook A5', 10, '2024-04-09', 500), 
('Deepak Mishra', 'Microwave Oven', 1, '2024-04-12', 12000); 
SELECT * FROM Orders;
