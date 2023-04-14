import React from 'react';
import '../style/Header.css'
import logo from '../assets/images/logo.png'
// @ts-ignore
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            
                <nav className='left-header'>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={''}>Login</Link></li>
                    </ul>
                </nav>
            
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul className='right-header'>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact-us'}>Contact Us</Link></li>
                    <li><Link to={'/counter'}>Counter</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;