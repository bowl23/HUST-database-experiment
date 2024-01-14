import styles from './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useRef } from 'react'
import { Button, Card, Input } from 'antd'



const Login = () => {
    const nav = useNavigate();
    const userNameDom = useRef()
    const passwordDom = useRef()

    const login = () => {
        console.log(userNameDom.current.input.defaultValue, passwordDom.current.input.defaultValue);
        const username = userNameDom.current.input.defaultValue
        const password = passwordDom.current.input.defaultValue
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
        {
            <Card className='container'>
                <div className='inputContainer'>
                    <div className='label'>用户名</div>
                    <Input className='input' id='username' placeholder='请输入用户名' ref={userNameDom}></Input>
                </div>
                <div className='inputContainer'>
                    <div className='label'>密码</div>
                    <Input.Password className='input' id='password' placeholder='请输入密码' ref={passwordDom}></Input.Password>
                </div>
                <Button id='login' type='primary' onClick={login}>登录</Button>
            </Card>




        /* <form className="container">
                    <input type="text" name="username" id="username" ref={userNameDom} />
                    <label className="usernameLabel" placeholder=" " >用户名</label>
                    <input type="password" name="password" id="password" ref={passwordDom} />
                    <label className="passwordLabel" placeholder=" " >密码</label>
                    <div className="loginBtn" onClick={login}>登录</div>
                </form> */}

    </>
}
export default Login