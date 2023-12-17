create table Student(
    Sno char(9) primary key,
    Sname char(20) unique,
    Ssex char(2),
    Sage smallint,
    Sdept char(20),
    Scholarship char(2)
);
create table Course(
    Cno char(4) primary key,
    Cname char(40),
    Cpno char(4),
    Credit smallint,
    foreign key (Cpno) references Course(Cno)
);
create table SC(
    Sno char(9),
    Cno char(4),
    Grade smallint,
    primary key (Sno,Cno),
    foreign key (Sno) references Student(Sno),
    foreign key (Cno) references Course(Cno)
);
insert into student values('200215121','李勇','男',20,'CS','否'),
                          ('200215122','刘晨','女',19,'CS','否'),
                          ('200215123','王敏','女',18,'MA','否'),
                          ('200215125','张立','男',19,'IS','否');

insert into course values('1','数据库',NULL,4),
                         ('2','数学',NULL,2),
                         ('3','信息系统',NULL,4),
                         ('4','操作系统',NULL,3),
                         ('5','数据结构',NULL,4),
                         ('6','数据处理',NULL,2),
                         ('7','java',NULL,4);

insert into SC values('200215121','1',92),
                     ('200215121','2',85),
                     ('200215121','3',88),
                     ('200215122','2',90),
                     ('200215122','3',80);
select * from student;
select Student.Sno,Student.Sname from student,sc where Student.Sno=SC.Sno and SC.Cno='2'and SC.Grade>90;
select Sname,Ssex from Student where Sdept in ('IS','MA','CS');
select Sname,Sdept,Sage from Student where Sage between 20 and 23;
select Sname,Sno,Ssex from student where Sname like '刘%';
select Sno,Grade from SC where Cno='3' order by Grade desc ;
select avg(Grade) from SC where Cno='1';
select Sno from SC group by Sno having count(*)>3;


# 拓展练习
# 拓展练习
select Sno,Sname,Sage from student;
select * from student where Sdept='CS';
select Sno,Cno,Grade from SC where Grade>=90||Grade<60;
select Sname,Ssex,Sage from student where Sage<19||Sage>20;
select Sname,Sdept from student where Sdept='MA'||Sdept='IS';
select Cno,Cname,Credit from course where Cname like '%数据%';
select student.Sno ,course.Cno from student,sc,course where student.Sno!=sc.Sno;
select max(Grade),min(Grade),avg(Grade) from SC where Sno='200215121';
select Sno,Grade from sc where Cno='2' order by Grade asc ;
select Sdept,avg(Sage) from student group by Sdept;
