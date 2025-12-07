use JoiningTask
create table tbl_student (
    studentId varchar(10) primary key,
    firstName varchar(50),
    lastName varchar(50),
    courseId varchar(10)
);

insert into tbl_student (studentId, firstName, lastName, courseId) values
('L0002345', 'Jim', 'Black', 'C002'),
('L0001254', 'James', 'Harradine', 'A004'),
('L0002649', 'Amanda', 'Holland', 'C002'),
('L0001198', 'Simon', 'McCloud', 'S042');


create table tbl_course (
    courseId varchar(10) foreign key references tbl_student(studentId) on update cascade,
    courseName varchar(100)
)

insert into tbl_course (courseId, courseName) values
('A004', 'Accounts'),
('C002', 'Computing'),
('P301', 'History'),
('S042', 'Short Course');