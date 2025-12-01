use techpile;

create table Cars ( 
CarID INT PRIMARY KEY IDENTITY(1,1), 
Brand VARCHAR(50), 
Model VARCHAR(50), 
Year INT, 
Color VARCHAR(30), 
Price DECIMAL(10,2), 
FuelType VARCHAR(20), 
Transmission VARCHAR(20), 
Mileage INT 
);


insert into Cars (Brand, Model, Year, Color, Price, FuelType, Transmission, Mileage) values 
('Toyota', 'Corolla', 2020, 'White', 950000.00, 'Petrol', 'Automatic', 25000), 
('Honda', 'Civic', 2019, 'Black', 1100000.00, 'Petrol', 'Manual', 32000), 
('Hyundai', 'i20', 2021, 'Red', 750000.00, 'Diesel', 'Automatic', 15000), 
('Maruti Suzuki', 'Swift', 2018, 'Silver', 550000.00, 'Petrol', 'Manual', 40000), 
('Tata', 'Nexon', 2022, 'Blue', 1200000.00, 'Petrol', 'Automatic', 10000), 
('Mahindra', 'XUV300', 2020, 'Grey', 1150000.00, 'Diesel', 'Manual', 22000), 
('Kia', 'Seltos', 2021, 'White', 1500000.00, 'Petrol', 'Automatic', 18000), 
('MG', 'Hector', 2019, 'Black', 1600000.00, 'Petrol', 'Manual', 35000), 
('BMW', 'X1', 2018, 'Blue', 2800000.00, 'Diesel', 'Automatic', 42000), 
('Audi', 'A4', 2020, 'Silver', 3500000.00, 'Petrol', 'Automatic', 27000), 
('Mercedes', 'C-Class', 2021, 'White', 4200000.00, 'Petrol', 'Automatic', 15000), 
('Volkswagen', 'Polo', 2019, 'Red', 650000.00, 'Petrol', 'Manual', 30000), 
('Skoda', 'Rapid', 2020, 'Grey', 900000.00, 'Diesel', 'Manual', 28000), 
('Jeep', 'Compass', 2021, 'Black', 2200000.00,'Petrol', 'Automatic', 27000);

select * from Cars;