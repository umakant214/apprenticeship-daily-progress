create table tbl_department (
    dept_ID int primary key,
    dept_name varchar(50),
    dept_location varchar(20),
    dept_budget int
);
insert into tbl_department (dept_ID, dept_name, dept_location, dept_budget) values
(101, 'IT', 'FC-89', 500000),
(102, 'Electronics', 'FC-54', 400000),
(103, 'Admin', 'TY-56', 350000),
(104, 'Accounts', 'TY-43', 250000);

select * from tbl_department;


create table employee (
    emp_ID varchar(10) primary key,
    emp_name varchar(50),
    emp_dob date,
    emp_city varchar(50),
    dept_id INT FOREIGN KEY (dept_id) REFERENCES tbl_department(dept_ID)
);

insert into employee (emp_ID, emp_name, emp_dob, emp_city, dept_id) values
('SL21', 'Sana', '1978-04-30', 'Delhi', 101),
('SG45', 'Ram', '1987-01-08', 'Prayagraj', 103),
('PL67', 'Aayush', '1992-03-01', 'Delhi', 101),
('HG66', 'Dawid', '1990-07-25', 'Kanpur', 103),
('NF78', 'Nishank', '1996-11-19', 'Prayagraj', 104),
('FR32', 'John', '1989-08-03', 'Delhi', 104);

select * from tbl_department  inner join employee  ON tbl_department.dept_ID = employee.dept_id;


