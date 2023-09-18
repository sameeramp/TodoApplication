import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const storedItem = JSON.parse(localStorage.getItem('userData'))
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate()

    const handleregister = () => {
        navigate('/signup')
    }

    const handleLogin = () => {

        for (let i = 0; i < storedItem.length; i++) {

            if (storedItem[i].username == username && storedItem[i].password == password) {
                alert('login succesfully')
                navigate('/')
                break;
            } else {
                alert("plz check ur login details")
            }

        }
    }
    return (
        <div id="loginform">

            <h2 title="Login" id="headerTitle">Login</h2>
            <div>

                <div class="row">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Enter your Username" />
                </div>
                <div class="row">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter your Password" />
                </div>
                <div id="button" class="row">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
            <div id="alternativeLogin">
                <label>Dont have  account? <span onClick={handleregister} style={{ color: 'blue' }}>signup</span></label>
                <div id="iconGroup">

                </div>
            </div>
        </div>
    )
}

export default Login










