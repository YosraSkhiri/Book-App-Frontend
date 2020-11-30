import React, { useState } from 'react';
import axios from 'axios';
import NotificationInfo from './NotificationInfo';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [res, setRes] = useState();

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/readers/login/', loginData)
            .then(res => {
                setRes(res.data.msg);
            })
            .catch(err => {
                setRes(err.response.data.msg);
            });
    }

    return (
        <div className="auth-container">
            <h1 className="auth-heading">Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input 
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        className="input-txt input-txt--ac"
                    />
                </label>

                <label>Password
                    <input 
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        className="input-txt input-txt--ac"
                    />
                </label>

                <input 
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                />
            </form>
            {
                res ? <NotificationInfo res={res}/> : null
            }
        </div>
    );
}
 
export default Login;