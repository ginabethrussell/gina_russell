import React from 'react';
import { Link } from 'react-router-dom';

import developer from '../girl.png';

import './Header.css';

export default function Header () {
    return (
        <div className='header-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img width='30px' src={developer} alt='girl developer logo'/>
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