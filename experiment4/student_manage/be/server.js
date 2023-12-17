const express = require('express');
const db = require('./sql')//配置数据库
const cors = require('cors');//解决跨域
const server = express();

server.use(cors());//解决跨域问题的插件

server.get('/api/login', (req, res) => {
    console.log(req.query);
    // console.log('hello');
    let username = req.query.username;
    let password = req.query.password;
    db.query('select * from user where username=? and password=?', [username, password], (err, data) => {
        if (err) {
            throw err;
        }
        else if (data.length > 0) {
            res.end(JSON.stringify(data));
            console.log(data);
        }
    })
})

server.get('/api/studentSelect', (req, res) => {
    db.query('select * from student', (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.end(JSON.stringify(data));
            console.log(data);
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
            console.log(data);
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
            console.log(data);
        }
    })
})




server.listen(3000, () => {
    console.log('服务已启动');
});