import React from 'react';
import { Link } from 'react-router-dom';
import Footer from  './Footer';

import AnywhereFitnessHome from '../anywherefitness.png';
import developer from '../girl.png';

import './AnywhereFitness.css';

export default function AnywhereFitness () {
    return (
        <div className='anywherefitness-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img width='30px' src={developer} alt='girl developer logo'/>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='project-section'>
                <h1>Anywhere Fitness</h1>
                <div className='img-wrapper'>
                    <img src={AnywhereFitnessHome} />
                </div>
                <h2>Details Coming Soon</h2>
            </div> 
            <Footer />
        </div>
    )
}