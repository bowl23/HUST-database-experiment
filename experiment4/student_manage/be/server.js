const express = require('express');
const db = require('./sql')//配置数据库
const cors = require('cors');//解决跨域
const server = express();

server.use(cors());//解决跨域问题的插件

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


server.get('/api/studentSelect', (req, res) => {
    db.query('select * from student', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
        }
    })
})

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




server.listen(3000, () => {
    console.log('服务已启动');
});