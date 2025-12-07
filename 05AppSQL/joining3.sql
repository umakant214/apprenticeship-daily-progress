create database JoiningTask
use JoiningTask
create table student (
    studentId varchar(10) primary key,
    firstName varchar(50),
    lastName varchar(50),
    courseId varchar(10)
);
insert into student (studentId, firstName, lastName, courseId) values
('L0002345', 'Jim', 'Black', 'C002'),
('L0001254', 'James', 'Harradine', 'A004'),
('L0002349', 'Amanda', 'Holland', 'C002'),
('L0001198', 'Simon', 'McCloud', 'S042');

select * from student;

create table course (
    courseId varchar(10) primary key,
    courseName varchar(100)
);
insert into course (courseId, courseName) values
('A004', 'Accounts'),
('C002', 'Computing'),
('P301', 'History'),
('S042', 'Short Course');

select * from course
select * from student inner join course on student studentId=course.courseId


