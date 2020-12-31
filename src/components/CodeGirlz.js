import React from 'react';
import { Link } from 'react-router-dom';
import './CodeGirlz.css';
import CodeGirlzHome from '../CodeGirlzHome.png';

export default function CodeGirlz () {
    return (
        <div className='codegirlz-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='project-section'>
                <h1>CodeGirlz</h1>
                <div className='img-wrapper'>
                    <img src={CodeGirlzHome} />
                </div>
            </div>
            
        </div>
    )
}