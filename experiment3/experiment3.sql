# (1)
create view CS_View as select * from student where Sdept='CS';
# (2)
select CS_View.* from CS_View,sc where CS_View.Sno=sc.Sno and sc.Cno='1';
# (3)
create view IS_View as select student.* from student,sc where student.Sno=sc.Sno and  sc.Grade>80 and student.Sdept='IS';
# (4)
select * from IS_View;
# (5)s
drop view IS_View;
# (6)
grant select,update on table student to U1;
grant select, update on table experiment1.student to U1@localhost;
grant insert on table experiment1.sc to U2@localhost;

# 此界面为用户U1
# 1)
select *from student;
# 2)
update student set student.Sage=Sage+1;
select * from student;
# 3)
delete from student where student.Sdept='IS';
# 4)
select * from sc,student where sc.Sno=student.Sno and student.Sdept='CS';
# 此界面为U2
# 1)
insert into sc values ('200215122','1',75);
# 2)
select * from sc;
# 3)
select * from CS_View;
#此界面回到root
# (7)
revoke all privileges on table student from U1@localhost;
# (8)
use experiment1;
select * from student;
# (9)
# (10)
create trigger test_trigger after update on sc for each row
    begin
        update student set Scholarsihp='是' where (
        select sc.sno, Grade,student.Scholarsihp,Sno from student,sc where sc.Sno=student.Sno and sc.Grade>95
                                    );
    end;
# (11)
# (12)
create procedure p1()
begin
  select avg(Grade),max(Grade) from sc, student where student.Sno=sc.Sno and student.Sdept='CS';
end;
call p1();
# (13)
create procedure p2(in stu_no varchar(9))
begin
    select student.sname from student where Sno=stu_no;
end;
call p2('200215121');
# (14)
create function fun1(stu_no varchar(9))
returns varchar(20) deterministic
begin
    declare stu_name varchar(20);
    select student.sname into stu_name from student where student.Sno=stu_no;
    return stu_name;
end;
select fun1('200215121');

# (15)
alter table sc add constraint c1 check ( Grade between 0 and 100);
update sc set Grade=80 where Sno='200215121' and Cno=1;
alter table sc add constraint c1 check ( Grade between 0 and 100);
update sc set Grade=120 where Sno='200215121' and Cno=1;
select * from sc;