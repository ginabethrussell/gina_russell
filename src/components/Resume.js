import React from 'react';
import { Link } from 'react-router-dom';
import developer from '../girl.png';
import Footer from './Footer';

import './Resume.css';

function Resume() {
    return (
        <div className='resume-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img width='30px' src={developer} alt='girl developer logo'/>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='resume'>
            <iframe src="https://resume.creddle.io/embed/5s3he9b48r3"
                width="850" height="1100" seamless></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default Resume;
