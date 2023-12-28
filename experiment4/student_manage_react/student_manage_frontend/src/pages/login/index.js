import styles from './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useRef } from 'react'


const Login = () => {
    const nav = useNavigate();
    const userNameDom = useRef(null)
    const passwordDom = useRef(null)

    const login = () => {
        console.log(userNameDom.current.value, passwordDom.current.value);
        const username = userNameDom.current.value
        const password = passwordDom.current.value
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
                nav('/student')
                // window.location.href = 'student.html';
            }
            else {
                alert('登录失败');
            }
        })
    }

    return <>
        <form className="container">
            <input type="text" name="username" id="username" ref={userNameDom} />
            <label className="usernameLabel" placeholder=" " >用户名</label>
            <input type="password" name="password" id="password" ref={passwordDom} />
            <label className="passwordLabel" placeholder=" " >密码</label>
            <div className="loginBtn" onClick={login}>登录</div>
        </form>
        <div className="title">
            <div className="first">Manage</div>
            <div className="second">Your</div>
            <div className="third">Student</div>
            <div className="forth">Information</div>
            <div className="fifth">Effectively</div>
        </div>
    </>
}
export default Login