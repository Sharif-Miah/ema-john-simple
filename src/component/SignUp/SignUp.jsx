import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-heading'>Sign Up</h1>
            <form className='form-content'>
                <div className='form'>
                    <label className='input-label' htmlFor="name">Name</label>
                    <input type="text" name="name" id="" placeholder='Name' required />
                </div>
                <div className='form'>
                    <label className='input-label' htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className='form'>
                    <label className='input-label' htmlFor="password">password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>
                <button className='submit-btn'>
                    Sign Up
                </button>
            </form>
            <p className='link-text'><small>Already have a Account <Link to='/login' className='link'>Login Now.</Link></small></p>
        </div>
    );
};

export default SignUp;