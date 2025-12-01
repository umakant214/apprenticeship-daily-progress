use techpile;
create table Departments ( 
DeptID INT PRIMARY KEY IDENTITY(1,1), 
DeptName VARCHAR(50), 
Manager VARCHAR(50), 
Location VARCHAR(50) 
);
insert into Departments (DeptName, Manager, Location) values 
('IT', 'Anuj Singh', 'Delhi'), 
('HR', 'Megha Kapoor', 'Mumbai'), 
('Finance', 'Tarun Batra', 'Kolkata'), 
('Marketing', 'Karan Arora', 'Chandigarh'), 
('Sales', 'Raj Verma', 'Jaipur'), 
('Support', 'Rohan Gupta', 'Pune'), 
('Operations', 'Neha Joshi', 'Delhi'), 
('Admin', 'Sumit Arora', 'Mumbai'), 
('Security', 'Amit Yadav', 'Noida'), 
('Development', 'Rohit Saxena', 'Bangalore'), 
('Design', 'Riya Khanna', 'Hyderabad'), 
('R&D', 'Vikas Mehta', 'Chennai'), 
('QA', 'Sneha Patel', 'Pune'), 
('Logistics', 'Manish Gupta', 'Lucknow'), 
('Training', 'Nisha Yadav', 'Indore');
SELECT * FROM Departments;
