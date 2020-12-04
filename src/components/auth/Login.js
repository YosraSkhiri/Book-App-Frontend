import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import NotificationInfo from '../common/NotificationInfo';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [res, setRes] = useState();
    const isLogged = useState(Cookies.get('isLogged'));

    useEffect(() => {
        if(isLogged[0]) {
            window.location.href='http://localhost:3000/';
        }
    }, []);

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/readers/login/', loginData, { withCredentials: true })
            .then(res => {
                setRes(res.data.msg);
                window.location.href='http://localhost:3000/'; 
            })
            .catch(err => { 
                setRes(err.response.data.msg);   
            });
    }

    return ( 
        isLogged[0] ? 'Redirecting...' :
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