USE techpile;

CREATE TABLE candidates 
(  
    id INT PRIMARY KEY IDENTITY(1,1), 
    name VARCHAR(100), 
    college VARCHAR(100), 
    phone BIGINT,     
    city VARCHAR(50), 
    department VARCHAR(50),    
    fees DECIMAL(10, 2), 
    year INT,     
    dob DATE
); 

insert into candidates (name, college, phone, city, department, fees, year, dob) values  
('Alice Johnson', 'ABC University', 1234567890, 'New York', 'Computer Science', 1500.00, 2025, '2003-05-15'), 
('Bob Smith', 'XYZ College', 1234567891, 'Los Angeles', 'Mechanical Engineering', 1600.00, 2025, '2002-08-22'), 
('Charlie Brown', 'LMN Institute', 1234567892, 'Chicago', 'Electrical Engineering', 1550.00, 2025, '2003-01-10'), 
('Diana Prince', 'PQR University', 1234567893, 'Houston', 'Civil Engineering', 1620.00, 2024, '2002-12-30'), 
('Ethan Hunt', 'STU College', 1234567894, 'Phoenix', 'Information Technology', 1580.00, 2025, '2003-03-25'), 
('Fiona Apple', 'GHI University', 1234567895, 'Philadelphia', 'Biotechnology', 1650.00, 2024, '2002-09-18'), 
('George Clooney', 'JKL Institute', 1234567896, 'San Antonio', 'Physics', 1500.00, 2025, '2003-07-07'), 
('Hannah Montana', 'MNO College', 1234567897, 'San Diego', 'Mathematics', 1525.00, 2024, '2002-11-11'), 
('Ian Malcolm', 'RST University', 1234567898, 'Dallas', 'Chemistry', 1575.00, 2025, '2003-04-04'), 
('Julia Roberts', 'UVW College', 1234567899, 'San Jose', 'Economics', 1610.00, 2024, '2002-06-14'), 
('Kevin Spacey', 'XYZ University', 1234567800, 'Austin', 'Business Administration', 1590.00, 2025, '2003-02-20'), 
('Laura Croft', 'ABC Institute', 1234567801, 'Jacksonville', 'Graphic Design', 1540.00, 2024, '2002-10-30'), 
('Ursula K. Le Guin', 'DEF Institute', 1234567810, 'Milwaukee', 'Literature Studies', 1550.00, 2025, '2003-04-11'), 
('Victor Hugo', 'GHI University', 1234567811, 'Memphis', 'History Studies', 1620.00, 2024, '2002-09-29'), 
('Walt Disney', 'JKL College', 1234567812, 'Baltimore', 'Animation Studies', 1515.00, 2025, '2003-03-10'), 
('Xena Warrior Princess', 'MNO Institute', 1234567813, 'Colorado Springs', 'Martial Arts Studies', 1580.00, 2024, '2002-11-23'), 
('Yoda Jedi Master', 'RST University', 1234567814, 'Albuquerque', 'Philosophy Studies', 1640.00, 2025, '2003-02-14'), 
('Zoe Saldana', 'UVW College', 1234567815, 'Tucson', 'Dance Studies', 1560.00, 2024, '2002-10-05');

SELECT * FROM candidates;
