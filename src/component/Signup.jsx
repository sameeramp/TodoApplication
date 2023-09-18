import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
let Logindetails = []
function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });
    const navigate = useNavigate()

    const handlelogin = () => {
        navigate('/login')
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };


    const handleSignup = () => {

        Logindetails.push(formData)
        if (formData.username && formData.password && formData.email) {


            localStorage.setItem("userData", JSON.stringify(Logindetails));
            alert('Signup successful! Please login.');
            navigate('/')
            setFormData({ username: '', password: '', email: '' });
        } else {
            alert('Please fill in both username and password fields.');
        }
    };

    return (
        <div id="loginform">

            <h2 title="Login" id="headerTitle">Signup</h2>
            <div>
                <div class="row">
                    <label>Email</label>
                    <input type="email" name="email"
                        value={formData.email}
                        onChange={handleInputChange} placeholder="Enter your Email" />
                </div>
                <div class="row">
                    <label>Username</label>
                    <input type="text" name="username"
                        value={formData.username}
                        onChange={handleInputChange} placeholder="Enter your Username" />
                </div>
                <div class="row">
                    <label>Password</label>
                    <input type="password" name="password"
                        value={formData.password}
                        onChange={handleInputChange} placeholder="Enter your Password" />
                </div>
                <div id="button" class="row">
                    <button onClick={handleSignup}>Signup</button>
                </div>
            </div>
            <div id="alternativeLogin">
                <label>already have  account? <span onClick={handlelogin} style={{ color: 'blue' }}>login</span></label>
                <div id="iconGroup">

                </div>
            </div>
        </div>
    )
}

export default Signup










