import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignupData({...signupData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/readers/register/', signupData)
            .then(res => {
                console.log('done!')
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div className="auth-container">
            <h1 className="auth-heading">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name
                    <input 
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        name="first_name"
                        onChange={handleChange}
                        className="input-txt input-txt--ac"
                    />
                </label>

                <label>Last Name
                    <input 
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        name="last_name"
                        onChange={handleChange}
                        className="input-txt input-txt--ac"
                    />
                </label>

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
                    value="Sign Up"
                    className="btn btn-primary"
                />
            </form>
        </div>
    );
}
 
export default Signup;