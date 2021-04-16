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
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQT0yik2RLSsKxtTMp_6p7WdlFmWT3tw8K8oVH1lsXbkRDGFZeHlDQ5z0CQQlVoCVOQvWp3TOGZYfKu/pub?embedded=true"
                width="850" height="1100" seamless></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default Resume;
