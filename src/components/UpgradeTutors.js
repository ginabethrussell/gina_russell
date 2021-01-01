import React from 'react';
import { Link } from 'react-router-dom';
import Footer from  './Footer';

import upGradeHome from '../upgradeHome.png';
import developer from '../girl.png';

import './UpgradeTutors.css';

export default function UpgradeTutors () {
    return (
        <div className='upgradetutors-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img width='30px' src={developer} alt='girl developer logo'/>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='project-section'>
                <h1>upGrade Tutors</h1>
                <div className='img-wrapper'>
                    <img src={upGradeHome} />
                </div>    
                <h2>Details Coming Soon</h2>
            </div>
            <Footer />
        </div>
    )
}