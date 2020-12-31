import React from 'react';
import { Link } from 'react-router-dom';
import './UpgradeTutors.css';
import upGradeHome from '../upgradeHome.png';
import FullPage from '../upgradeTutors.png';

export default function UpgradeTutors () {
    return (
        <div className='codegirlz-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='project-section'>
                <h1>upGrade Tutors</h1>
                <div className='img-wrapper'>
                    <img src={upGradeHome} />
                </div>
                <div className='img-wrapper'>
                    <img src={FullPage} />
                </div>
            </div>
            
        </div>
    )
}