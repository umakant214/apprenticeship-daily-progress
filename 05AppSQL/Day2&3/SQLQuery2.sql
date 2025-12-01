use Shop;
CREATE TABLE Employees (
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(12,2),
    JoiningDate DATE,
    Email VARCHAR(100),
    PhoneNumber VARCHAR(50),
    Address VARCHAR(200)
);

insert into Employees 
(FirstName, LastName, Department, Salary, JoiningDate, Email, PhoneNumber, Address) VALUES
('John', 'Doe', 'IT', 78050.05, '2015-06-23', 'john.doe@company.com', '123 Main St', '123 Main St'),
('Alice', 'Smith', 'HR', 65000, '2017-08-15', 'alice.smith@company.com', '456 Elm St', '456 Elm St'),
('Robert', 'Brown', 'Finance', 85000.75, '2016-04-12', 'robert.brown@company.com', '786 Pine St', '786 Pine St'),
('Emily', 'Johnson', 'Sales', 72000.3, '2019-11-28', 'emily.johnson@company.com', '158 Maple St', '158 Maple St'),
('Michael', 'Williams', 'Marketing', 63000.45, '2016-07-18', 'michael.williams@company.com', '752 Oak St', '752 Oak St'),
('David', 'Jones', 'IT', 90000, '2018-03-05', 'david.jones@company.com', '264 Cedar St', '264 Cedar St'),
('Sephia', 'Taylor', 'HR', 63000.2, '2021-02-21', 'sophia.taylor@company.com', '386 Birch St', '386 Birch St'),
('Daniel', 'Martinez', 'Operations', 78000.9, '2018-09-03', 'daniel.martinez@company.com', '967 Walnut St', '967 Walnut St'),
('Olivia', 'Anderson', 'Finance', 91000.45, '2020-01-13', 'olivia.anderson@company.com', '357 Chestnut St', '357 Chestnut St'),
('James', 'Thomas', 'IT', 92000.1, '2017-09-20', 'james.thomas@company.com', '687 Redwood St', '687 Redwood St'),
('Jessica', 'Harris', 'Marketing', 71000.8, '2020-06-30', 'jessica.harris@company.com', '147 Spruce St', '147 Spruce St'),
('William', 'White', 'Sales', 67000.4, '2016-12-22', 'william.white@company.com', '489 Fir St', '489 Fir St'),
('Ethan', 'Moore', 'Operations', 74000.25, '2015-03-17', 'ethan.moore@company.com', '369 Sycamore St', '369 Sycamore St'),
('Isabella', 'Jackson', 'HR', 62000.5, '2019-12-11', 'isabella.jackson@company.com', '741 Acacia St', '741 Acacia St'),
('Alexander', 'Martin', 'Finance', 88000.3, '2017-04-26', 'alexander.martin@company.com', '592 Hazel St', '592 Hazel St'),
('Mia', 'Lee', 'Marketing', 70000.2, '2019-05-04', 'mia.lee@company.com', '963 Palm St', '963 Palm St'),
('Benjamin', 'Garcia', 'Sales', 69000.45, '2016-09-29', 'benjamin.garcia@company.com', '357 Pine St', '357 Pine St'),
('Charlotte', 'Lopez', 'IT', 88000.5, '2018-03-14', 'charlotte.lopez@company.com', '951 Oak St', '951 Oak St'),
('Mason', 'Clark', 'Operations', 79000.1, '2015-06-03', 'mason.clark@company.com', '654 Birch St', '654 Birch St'),
('Ava', 'Rodriguez', 'HR', 64000.55, '2021-09-17', 'ava.rodriguez@company.com', '147 Elm St', '147 Elm St'),
('Liam', 'Evans', 'IT', 91000.55, '2016-01-15', 'liam.evans@company.com', '901 Kudu Lane', '901 Kudu Lane'),
('Liam', 'Evans', 'IT', 91000.55, '2022-01-30', '967 Chestnut St. Cape Town', '967 Chestnut St. Cape Town', '967 Chestnut St. Cape Town');



select * from Employees where salary> 70000;

select * from Employees where JoiningDate>'2015';

select * FROM Employees where Address like '%Cape Town%';

select Department, count(*) FROM Employees group by Department;


select Department , avg(Salary) FROM Employees group by Department;

select   Department, COUNT(*) AS EmployeeCount FROM Employees WHERE Salary > 70000 group BY Department;

select * from Employees  order by Salary desc;

select Department from Employees group by Department having avg(Salary)>70000;

select count(*) from Employees where Email is null; 



