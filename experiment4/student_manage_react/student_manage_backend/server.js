const express = require('express');
const db = require('./sql')//配置数据库
const cors = require('cors');//解决跨域
const server = express();

server.use(cors());//解决跨域问题的插件


//登录api
server.get('/api/login', (req, res) => {
    // console.log(req);
    let username = req.query.username;
    let password = req.query.password;
    console.log(username, password);
    db.query('select * from user where username=? and password=?', [username, password], (err, data) => {
        if (err) {
            throw err;
        }
        else if (data.length > 0) {
            res.end(JSON.stringify(data));
        }
    })
})

//student界面的api
//新增学生
server.get('/api/student/add', (req, res) => {
    console.log(req.query);
    let Sno = req.query.Sno;
    let Sname = req.query.Sname;
    let Ssex = req.query.Ssex;
    let Sage = req.query.Sage;
    let Sdept = req.query.Sdept;
    let Scholarship = req.query.Scholarship;
    let flag = Sno && Sname && Ssex && Sage && Sdept && Scholarship
    console.log(flag);
    if (flag) {
        db.query("insert into student values (?,?,?,?,?,?)", [Sno, Sname, Ssex, Sage, Sdept, Scholarship], (err, data) => {
            if (err)
                throw err;
        })
        res.end("新增学生信息成功");
    }
    else {
        res.end('请正确填写完整学生信息')
    }
})

//查询学生
server.get('/api/student/select', (req, res) => {
    // console.log(req);
    let table = req.query.table
    db.query('select * from student', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})

//更新学生，根据学号修改，其他修改暂时懒得搞
server.get('/api/student/update', (req, res) => {
    console.log('update');
    let Sno = req.query.Sno;
    let Sname = req.query.Sname;
    let Ssex = req.query.Ssex;
    let Sage = req.query.Sage;
    let Sdept = req.query.Sdept;
    let Scholarship = req.query.Scholarship;
    let flag = Sno && Sname && Ssex && Sage && Sdept && Scholarship
    console.log(Sno, Sname, Ssex, Sage, Sdept, Scholarship);
    if (flag) {
        db.query("update student set Sname=?, Ssex=? ,Sage=?, Sdept=?, Scholarship=? where student.Sno=?;", [Sname, Ssex, Sage, Sdept, Scholarship, Sno], (err, data) => {
            if (err)
                throw err;
            console.log(data);
        })
        res.end("更改学生信息成功");
    }
    else {
        res.end('请正确填写完整学生信息')
    }
}
)
//删除学生
server.get('/api/student/delete', (req, res) => {

    let Sno = req.query.Sno;
    let Sname = req.query.Sname;
    let Ssex = req.query.Ssex;
    let Sage = req.query.Sage;
    let Sdept = req.query.Sdept;
    let Scholarship = req.query.Scholarship;
    let flag = Sno && Sname && Ssex && Sage && Sdept && Scholarship
    console.log(Sno, Sname, Ssex, Sage, Sdept, Scholarship);
    if (flag) {
        db.query("delete from student where Sno=?;", [Sno], (err, data) => {
            if (err)
                throw err;
            console.log(data);
        })
        res.end("删除学生信息成功");
    }
    else {
        res.end('请正确填写完整学生信息')
    }
})

// sc界面的api
//选课查询
server.get('/api/sc/select', (req, res) => {
    db.query('select * from sc', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})

// 选课增加
server.get('/api/sc/add', (req, res) => {
    console.log(req.query);
    let Sno = req.query.Sno;
    let Cno = req.query.Cno;
    let Grade = req.query.Grade;
    let flag = Sno && Cno && Grade;
    if (flag) {
        db.query('insert into sc values (?,?,?)', [Sno, Cno, Grade], (err, data) => {
            if (err)
                throw err;
        })
        res.end('新增选课成功')
    }
    else {
        res.end('请填写正确选课信息');
    }
})

// 选课修改
server.get('/api/sc/update', (req, res) => {
    console.log(req.query);
    let Sno = req.query.Sno;
    let Cno = req.query.Cno;
    let Grade = req.query.Grade;
    let flag = Sno && Cno && Grade;
    if (flag) {
        db.query('update sc set Grade=? where Sno=? and Cno=?', [Grade, Sno, Cno], (err, data) => {
            if (err)
                throw err;
        })
        res.end('更改选课成功')
    }
    else {
        res.end('请填写正确选课信息');
    }
})

// 选课删除
server.get('/api/sc/delete', (req, res) => {
    let Sno = req.query.Sno;
    let Cno = req.query.Cno;
    let Grade = req.query.Grade;
    let flag = Sno && Cno && Grade;
    if (flag) {
        db.query('delete from sc where Sno=? and Cno=?;', [Sno, Cno], (err, data) => {
            if (err)
                throw err;
        })
        res.end('删除选课信息成功')
    }
    else {
        res.end('请正确填写完整选课信息');
    }

})

// course界面的api
//课程查询
server.get('/api/course/select', (req, res) => {
    db.query('select * from course', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})

// 课程新增
server.get('/api/course/add', (req, res) => {
    console.log(req.query);
    let Cno = req.query.Cno;
    let Cname = req.query.Cname;
    let Cpno = req.query.Cpno;
    let Credit = req.query.Credit;
    let flag = Cno && Cname && Cpno && Credit;
    if (flag) {
        db.query('insert into course values (?,?,?,?)', [Cno, Cname, Cpno, Credit], (err, data) => {
            if (err)
                throw err;
        })
        res.end('新增课程成功')
    }
    else {
        res.end('请填写正确课程信息');
    }
})

// 课程修改
server.get('/api/course/update', (req, res) => {
    console.log(req.query);
    let Cno = req.query.Cno;
    let Cname = req.query.Cname;
    let Cpno = req.query.Cpno;
    let Credit = req.query.Credit;
    let flag = Cno && Cname && Cpno && Credit;
    if (flag) {
        db.query('update course set Cname=?, Cpno=?, Credit=? where Cno=?', [Cname, Cpno, Credit, Cno], (err, data) => {
            if (err)
                throw err;
        })
        res.end('更改课程成功')
    }
    else {
        res.end('请填写正确课程信息');
    }
})

// 课程删除
server.get('/api/course/delete', (req, res) => {
    let Cno = req.query.Cno;
    let Cname = req.query.Cname;
    let Cpno = req.query.Cpno;
    let Credit = req.query.Credit;
    let flag = Cno && Cname && Cpno && Credit;
    if (flag) {
        db.query('delete from course where Cno=? and Cname=?;', [Cno, Cname], (err, data) => {
            if (err)
                throw err;
        })
        res.end('删除课程信息成功')
    }
    else {
        res.end('请正确填写完整课程信息');
    }

})

// cs学生成绩查询
server.get('/api/statistics/cs', (req, res) => {
    db.query('select student.Sdept sdeption, avg(Grade) avg,max(Grade) max,min(Grade) min from sc,student where Student.Sno=sc.Sno GROUP BY Sdept;', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data))
        }
    })
})


// 个人信息查询
server.get('/api/personalGrade', (req, res) => {
    let Sno = req.query.Sno;
    db.query('select * from student where student.Sno=?', [Sno], (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})


//监听3000端口
server.listen(3000, () => {
    console.log('服务已启动');
});