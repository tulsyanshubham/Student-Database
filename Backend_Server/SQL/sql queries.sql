-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'abcd1234';

create database	studentsdb;
-- drop database studentsdb;
use studentsdb;

create table students (
    name varchar(30),
    gender varchar(6),
	usn CHAR(10) primary key,
	dob date
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
    sub_code varchar(10) primary key,
    sem numeric(1)
);

create table marks (
	usn VARCHAR(10),
    sub_code varchar(10),
    test1 numeric(3),
    test2 numeric(3),
    test3 numeric(3),
    average numeric(3),
    primary key (usn,sub_code),
    foreign key (usn) references students (usn),
    foreign key (sub_code) references subject (sub_code)
);

-- INSERT INTO about values ('1dt21cs147','km tulsyan','radha tulsyan','home');
-- INSERT INTO about values ('1dt21cs147','km agrawal','radha devi','BOYS HOSTEL-2, DSATM, KANAKAPURA RD, UDAYAPURA');
-- INSERT INTO department values ('1dt21cs147','cse');
insert into subject
values
('COA','21CS34',4),
('Maths 3','21MAT31',4),
('DSA','21CS32',4),
('ADE','21CS33',4),
('JAVA','21CSL35',4),
('C++','21CS382',4),
('DAA','21CS42',4),
('MES','21CS43',4),
('OS','21CS44',4),
('Python','21CSL46',4),
('R Program','21CSL483',4),
('ATCD','21CS51',4),
('CN','21CS52',4),
('DBMS','21CS53',4),
('AIML','21CS54',4),
('C# & .NET','21CS582',4);

INSERT INTO students (name, gender, usn, dob) 
VALUES 
('Aarav Kumar', 'Male', '1DT21CS001', '2000-05-15'),
('Neha Gupta', 'Female', '1DT21CS002', '2001-08-23'),
('Rahul Sharma', 'Male', '1DT21IS001', '2002-02-10'),
('Priya Singh', 'Female', '1DT21IS002', '2000-11-30'),
('Vikram Patel', 'Male', '1DT21AI001', '2003-03-18'),
('Kavita Mishra', 'Female', '1DT21AI002', '2001-07-05'),
('Aditya Joshi', 'Male', '1DT21EC001', '2002-09-12'),
('Pooja Reddy', 'Female', '1DT21EC002', '2000-04-25'),
('Rajesh Shah', 'Male', '1DT21EE001', '2003-01-09'),
('Anjali Verma', 'Female', '1DT21EE002', '2001-06-14'),
('Ravi Kumar', 'Male', '1DT21CG001', '2002-10-20'),
('Sneha Patel', 'Female', '1DT21CG002', '2000-12-07'),
('Vivek Singh', 'Male', '1DT21CS003', '2003-04-16'),
('Sunita Sharma', 'Female', '1DT21IS003', '2001-09-28'),
('Amit Verma', 'Male', '1DT21CS004', '2000-03-04'),
('Deepika Jain', 'Female', '1DT21IS004', '2002-11-11');

INSERT INTO about
VALUES
    ('1DT21CS001', 'Rahul Kumar', 'Sunita', '123, ABC Street, Bangalore'),
    ('1DT21CS002', 'Sneha Sharma', 'Meera', '456, XYZ Road, Mumbai'),
    ('1DT21IS001', 'Amit Patel', 'Sarita', '789, PQR Avenue, Delhi'),
    ('1DT21IS002', 'Priya Singh', 'Anita', '101, LMN Lane, Kolkata'),
    ('1DT21AI001', 'Raj Verma', 'Sangeeta', '234, EFG Colony, Chennai'),
    ('1DT21AI002', 'Pooja Gupta', 'Meenal', '567, HIJ Road, Hyderabad'),
    ('1DT21EC001', 'Vikram Yadav', 'Kavita', '890, STU Street, Pune'),
    ('1DT21EC002', 'Neha Joshi', 'Anita', '111, VWX Avenue, Jaipur'),
    ('1DT21EE001', 'Ankit Mishra', 'Sarika', '222, OPQ Road, Lucknow'),
    ('1DT21EE002', 'Sakshi Choudhary', 'Preeti', '333, RST Lane, Chandigarh'),
    ('1DT21CG001', 'Aryan Shah', 'Neha', '444, UVW Colony, Ahmedabad'),
    ('1DT21CG002', 'Shreya Saxena', 'Smita', '555, LMN Street, Bhopal'),
    ('1DT21CS003', 'Arjun Dube', 'Reena', '666, GHI Road, Indore'),
    ('1DT21IS003', 'Divya Thakur', 'Pooja', '777, JKL Avenue, Nagpur'),
    ('1DT21CS004', 'Aditya Pandey', 'Renu', '888, MNO Lane, Surat'),
    ('1DT21IS004', 'Kavita Goyal', 'Shalini', '999, ABC Colony, Thane');


INSERT INTO department (usn, dept)
VALUES
    ('1DT21CS001', 'CSE'),
    ('1DT21CS002', 'CSE'),
    ('1DT21IS001', 'ISE'),
    ('1DT21IS002', 'ISE'),
    ('1DT21AI001', 'AIML'),
    ('1DT21AI002', 'AIML'),
    ('1DT21EC001', 'ECE'),
    ('1DT21EC002', 'ECE'),
    ('1DT21EE001', 'EEE'),
    ('1DT21EE002', 'EEE'),
    ('1DT21CG001', 'CSD'),
    ('1DT21CG002', 'CSD'),
    ('1DT21CS003', 'CSE'),
    ('1DT21IS003', 'ISE'),
    ('1DT21CS004', 'CSE'),
    ('1DT21IS004', 'ISE');

INSERT INTO marks (usn, sub_code, test1, test2, test3, average)
VALUES
    ('1DT21CS001', '21CS34', 43, 45, 44, (43+45+44)/3),
    ('1DT21CS002', '21MAT31', 39, 41, 40, (39+41+40)/3),
    ('1DT21IS001', '21CS32', 46, 44, 45, (46+44+45)/3),
    ('1DT21IS002', '21CS33', 35, 34, 36, (35+34+36)/3),
    ('1DT21AI001', '21CSL35', 42, 43, 43, (42+43+43)/3),
    ('1DT21AI002', '21CS382', 39, 40, 41, (39+40+41)/3),
    ('1DT21EC001', '21CS42', 45, 46, 45, (45+46+45)/3),
    ('1DT21EC002', '21CS43', 41, 42, 42, (41+42+42)/3),
    ('1DT21EE001', '21CS44', 44, 42, 43, (44+42+43)/3),
    ('1DT21EE002', '21CSL46', 36, 39, 38, (36+39+38)/3),
    ('1DT21CG001', '21CSL483', 43, 44, 45, (43+44+45)/3),
    ('1DT21CG002', '21CS51', 41, 42, 41, (41+42+41)/3),
    ('1DT21CS003', '21CS52', 40, 41, 40, (40+41+40)/3),
    ('1DT21IS003', '21CS53', 44, 45, 44, (44+45+44)/3),
    ('1DT21CS004', '21CS54', 42, 43, 44, (42+43+44)/3),
    ('1DT21IS004', '21CS582', 39, 40, 39, (39+40+39)/3);


-- SELECT s.name, s.gender, s.usn, d.dept
-- FROM students s, department d
-- WHERE s.usn = d.usn AND s.name = 'Shubham' AND s.usn = '1dt21cs147' AND d.dept = 'cse';

-- SELECT s.name, s.usn, c.sub_name, m.test1, m.test2, m.test3, m.average
-- FROM students s, subject c, marks m
-- WHERE s.usn = m.usn AND m.sub_code = c.sub_code AND s.name LIKE '%sh%' AND s.usn LIKE '%147%' AND c.sub_code LIKE '%23%';

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
