import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/UserContext';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState(null);

    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password < 6) {
            setError("Password should be 6 characters or more.")
            return
        }

        if (password !== confirm) {
            setError('Your Password Did not match')
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => console.error(error))


    }


    return (
        <div className='form-container'>
            <h1 className='form-heading'>Sign Up</h1>
            <form onSubmit={handleSignUp} className='form-content'>

                <div className='form'>
                    <label className='input-label' htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className='form'>
                    <label className='input-label' htmlFor="password">password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <div className='form'>
                    <label className='input-label' htmlFor="confirm">Confirm password</label>
                    <input type="password" name="confirm" placeholder='Confirm password' required />
                </div>

                <button className='submit-btn'>
                    Sign Up
                </button>
            </form>
            <p className='link-text'><small>Already have a Account <Link to='/login' className='link'>Login Now.</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;