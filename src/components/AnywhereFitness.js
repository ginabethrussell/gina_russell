import React from 'react';
import { Link } from 'react-router-dom';
import './AnywhereFitness.css';
import AnywhereFitnessHome from '../anywherefitness.png';

export default function AnywhereFitness () {
    return (
        <div className='anywherefitness-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
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
        </div>
    )
}