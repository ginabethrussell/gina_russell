import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div className='header-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <Link to='/'>ginaRussell</Link>
                </div>
                <div className='navlinks'>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
            </nav>
        </div>
    )
}