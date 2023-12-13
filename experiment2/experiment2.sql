select student.*,sc.* from student,sc where student.Sno=sc.Sno;
select  student.Sno,Sname,Ssex,Sage,Cno,Grade from student,sc where student.Sno=sc.Sno;
select student.sno,Sname,Ssex,Sage,Sdept,Cno,Grade from student left  outer join sc on(student.Sno=sc.Sno);
select student.sno,Sname from student,sc where student.Sno=sc.Sno and sc.Cno='2' and sc.Grade>=90;
select student.Sno,Sname,Cname,Grade from student,sc,course where student.Sno=sc.Sno and sc.Cno=course.Cno;
select  Sno,Sname,Sdept from student where Sdept in(
    select Sdept from student where Sname='刘晨'
    );
select  Sno,Sname from student where Sno in(
    select Sno from sc where Cno in (
        select Cno from course where Cname='信息系统'
        )
                                         );
select Sno,Cno from sc x where Grade>=(select avg(Grade) from sc y where y.Sno=x.Sno);



# 拓展练习
# (1)
select course.Cno,Cname,sc.sno,Grade from course left join sc on course.Cno=sc.Cno;

# (2)
# 方法一
select student.sno,Sname,Sage from student where Sage=(
    select Sage from student where Sname='张立'
    );
# 方法二
select student.sno,Sname,Sage from student where Sage in (
    select Sage from student where Sname='张立'
    );
# 方法三
select s1.sno,s1.sname,s1.sage from student s1,student s2 where s1.Sage=s2.Sage and s2.Sname='张立';

# (3)
select student.sno,Sname from student,sc where student.sno=sc.sno and sc.Cno='2' and sc.Grade between 80 and 89;
# (4)
select sc.cno,course.cname from sc,course where sc.Sno='200215122' and sc.Cno=course.Cno;
# (5)
select sc.sno,Cno from sc where (select avg(Grade) from sc)-Grade>=5;
# (6)
select student.sno,Sname,Sage from student where Ssex='女' and Sage<(select min(Sage) from student where Ssex='男');
# (7)
select student.sname,Sdept from student,sc where student.sno=sc.Sno and sc.Cno='2';
# (8)
update student set Sage=Sage+2 where Sno in(select sc.Sno from sc where sc.Grade between 80 and 89);
select sc.Sno from sc where Grade between 80 and 89;
# (9)
insert into course(Cno,Cname) values (8,'C语言'),(9,'人工智能');
select * from course where Cname='C语言' or Cname='人工智能';
# (10)
delete from course where Cname='人工智能';
select * from course;