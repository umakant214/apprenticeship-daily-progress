use Shop;
create table Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Grade VARCHAR(10),
    City VARCHAR(50),
    Phone VARCHAR(15),
    Section CHAR(1)
);

insert into Students (ID, Name, Age, Grade, City, Phone, Section) values
(1, 'Aman', 15, '10th', 'Lucknow', '9876543001', 'A'),
(2, 'Riya', 14, '9th', 'Kanpur', '9876543002', 'B'),
(3, 'Kabir', 16, '11th', 'Delhi', '9876543003', 'A'),
(4, 'Meena', 15, '10th', 'Agra', '9876543004', 'C'),
(5, 'Arjun', 17, '12th', 'Lucknow', '9876543005', 'A'),
(6, 'Simran', 13, '8th', 'Jaipur', '9876543006', 'B'),
(7, 'Rahul', 16, '11th', 'Kanpur', '9876543007', 'A'),
(8, 'Neha', 14, '9th', 'Meerut', '9876543008', 'C'),
(9, 'Ishaan', 15, '10th', 'Delhi', '9876543009', 'B'),
(10, 'Priya', 17, '12th', 'Varanasi', '9876543010', 'A'),
(11, 'Dev', 13, '8th', 'Lucknow', '9876543011', 'C'),
(12, 'Anjali', 16, '11th', 'Agra', '9876543012', 'B'),
(13, 'Rohan', 14, '9th', 'Jaipur', '9876543013', 'A'),
(14, 'Tanya', 15, '10th', 'Meerut', '9876543014', 'B'),
(15, 'Kunal', 17, '12th', 'Delhi', '9876543015', 'C');


--Show each City and the number of students; include only cities with more than 2 students
--select city from Students where 

 
--Show the number of students in each Section from the city 'Lucknow'
select  Section, count(*) AS StudentCount from Students where City = 'Lucknow' group by Section;

--For each City, display total students and the maximum Age; include only cities where max Age is 17 or above. 
select * from 