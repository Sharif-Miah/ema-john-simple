import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu-link'>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory"> Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                    <button onClick={logOut} className='logout'>Log Out</button>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;