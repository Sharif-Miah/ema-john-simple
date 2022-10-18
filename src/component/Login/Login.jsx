import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className='form-container'>
            <h1 className='form-heading'>Login</h1>
            <form onSubmit={handleLogIn} className='form-content'>
                <div className='form'>
                    <label className='input-label' htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className='form'>
                    <label className='input-label' htmlFor="password">password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <button className='submit-btn'>
                    Login
                </button>
            </form>
            <p className='link-text'><small>New to Ema-john? <Link to='/signup' className='link'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;