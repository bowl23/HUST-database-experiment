const express = require('express');
const db = require('./sql')//配置数据库
const cors = require('cors');//解决跨域
const server = express();

server.use(cors());//解决跨域问题的插件


//登录api
server.get('/api/login', (req, res) => {
    let username = req.query.username;
    let password = req.query.password;
    db.query('select * from user where username=? and password=?', [username, password], (err, data) => {
        if (err) {
            throw err;
        }
        else if (data.length > 0) {
            res.end(JSON.stringify(data));
        }
    })
})

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
    db.query('select * from student', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})

//更新学生，根据学号修改，掐他修改暂时懒得搞
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


//选课查询
server.get('/api/scSelect', (req, res) => {
    db.query('select * from sc', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})

//课程查询
server.get('/api/courseSelect', (req, res) => {
    db.query('select * from course', (err, data) => {
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