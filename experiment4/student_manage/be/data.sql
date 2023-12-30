-- 这个项目的前置数据库初始化
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

create table user(
    id int primary key auto_increment,
    username varchar(20) unique ,
    password varchar(20)
    );

insert into student values
('200215121','李勇','男',20,'CS','否'),                          
('200215122','刘晨','女',19,'CS','否'),
('200215123','王敏','女',18,'MA','否'),
('200215125','张立','男',19,'IS','否');

insert into course values
('1','数据库',NULL,4),
('2','数学',NULL,2),
('3','信息系统',NULL,4),
('4','操作系统',NULL,3),
('5','数据结构',NULL,4),
('6','数据处理',NULL,2),
('7','java',NULL,4);

insert into SC values
('200215121','1',92),
('200215121','2',85),
('200215121','3',88),
('200215122','2',90),
('200215122','3',80);

insert into user value (1,"bowl",123456);