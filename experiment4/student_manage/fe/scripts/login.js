document.querySelector('.loginBtn').addEventListener('click', () => {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username);
    console.log('click');
    axios({
        url: 'http://localhost:3000/api/login',
        params: {
            username: username,
            password: password
        }

    }).then(result => {
        let correctUsername = result.data[0].username;
        let correctPassword = result.data[0].password;
        if (correctPassword === password && correctUsername === username) {
            alert('登录成功');
            window.location.href = 'student.html';
        }
        else {
            alert('登录失败');
        }
    })
});
