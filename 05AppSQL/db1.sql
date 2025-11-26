create database db1;
use db1;

create table empol
(
name varchar(100),
email varchar(100),
mob bigint,
dob varchar(100),
college varchar(100)
)

insert into empol values ('Umakant','umakant@gmail.com',8081727385,'03/08/2005','SSPI');
insert into empol values ('abhi','abhi@gmail.com',8081657385,'03/08/2005','Gov SSPI');
insert into empol values ('Harsh','harsh@gmail.com',9581657385,'03/08/2005','Gov SSPI');

select * from empol;