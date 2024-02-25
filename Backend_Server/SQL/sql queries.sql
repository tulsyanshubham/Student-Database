-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'abcd1234';

create database	test;
-- drop database test;
use test;

create table students (
    name varchar(30),
    gender varchar(1),
	usn VARCHAR(10),
	dob date,
	primary key (usn)
);

-- INSERT INTO students VALUES ('Shubham','M','1dt21cs147','2002-12-08');

create table about (
	usn VARCHAR(10),
    fname varchar(30),
    mname varchar(30),
	address varchar(50),
	foreign key (usn) references students (usn)
);

create table department (
	usn VARCHAR(10),
    dept varchar(4),
    foreign key (usn) references students (usn)
);

create table subject (
	sub_name VARCHAR(10),
    sub_code varchar(10),
    sem int(1),
    credits int(1),
    primary key (sub_code)
);

create table marks (
	usn VARCHAR(10),
    sub_code varchar(10),
    test1 int(3),
    test2 int(3),
    test3 int(3),
    average int(3),
    primary key (usn,sub_code),
    foreign key (usn) references students (usn),
    foreign key (sub_code) references subject (sub_code)
);

-- INSERT INTO about values ('1dt21cs147','km tulsyan','radha tulsyan','home');
-- INSERT INTO about values ('1dt21cs147','km agrawal','radha devi','BOYS HOSTEL-2, DSATM, KANAKAPURA RD, UDAYAPURA');
-- INSERT INTO department values ('1dt21cs147','cse');
insert into subject values('CO','21cs23',4,3);

-- SELECT s.name, s.gender, s.usn, d.dept
-- FROM students s, department d
-- WHERE s.usn = d.usn AND s.name = 'Shubham' AND s.usn = '1dt21cs147' AND d.dept = 'cse';

SELECT s.name, s.usn, c.sub_name, m.test1, m.test2, m.test3, m.average
FROM students s, subject c, marks m
WHERE s.usn = m.usn AND m.sub_code = c.sub_code AND s.name LIKE '%sh%' AND s.usn LIKE '%147%' AND c.sub_code LIKE '%23%';

-- select * from students;
-- select * from about;
-- select * from department;
-- select * from marks;

-- CREATE TRIGGER update_trigger1
-- BEFORE INSERT ON students
-- FOR EACH ROW
--     UPDATE students
--     SET name = NEW.name ,
-- 		gender = NEW.gender ,
-- 		dob = NEW.dob
--     WHERE usn = NEW.usn;

-- CREATE TRIGGER update_trigger2
-- BEFORE INSERT ON about
-- FOR EACH ROW
--     UPDATE about
--     SET fname = NEW.fname,
--         mname = NEW.mname,
--         address = NEW.address
--     WHERE usn = NEW.usn;

-- drop trigger update_trigger1;
-- drop trigger update_trigger2;
