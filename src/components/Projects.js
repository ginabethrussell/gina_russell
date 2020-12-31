import React from 'react';
import CodeGirlzHome from '../CodeGirlzHome.png';
import { Link } from 'react-router-dom';
import upGradeHome from '../upgradeHome.png'
import anywhereFitness from '../anywherefitness.png';

import './Projects.css';

export default function Projects () {
    return (
        <div id='projects' className='projects-wrapper'>
            <h2>Projects</h2>
            <div id='codegirlz' className='project-main'>
                <div className='project-img'>
                    <img width='500px' src={CodeGirlzHome} />
                </div>
                <div className='project-info'>
                    <div className = 'project-title'>
                        <h3>CodeGirlz</h3>
                    </div>
                    <p>A React single page application created to offer free online coding instruction for girls.</p>
                    <div className='view-project'>
                        <Link to='/project/codegirlz'>
                            Project Details
                        </Link>
                    </div>
                </div>       
            </div>
            <div id='upgradetutors' className='project-main'>
            <div className='project-info'>
                    <div className = 'project-title'>
                        <h3>upGrade Tutors</h3>
                    </div>
                    <p>A full stack web application created with a cross-functional team.</p>
                    <div className='view-project'>
                        <Link to='/project/upgradetutorsu'>
                            Project Details
                        </Link>
                    </div>   
                </div>
                <div className='project-img'>
                    <img width='500px' src={upGradeHome} />
                </div>   
            </div>
            <div id='anywherefitness' className='project-main'>
                <div className='project-img'>
                    <img width='500px' src={anywhereFitness} />
                </div>
                <div className='project-info'>
                    <div className = 'project-title'>
                        <h3>Anywhere Fitness</h3>
                    </div>
                    <p>A full stack web application created with a cross-functional team.</p>
                    <div className='view-project'>
                        <Link to='/project/codegirlz'>
                            Project Details
                        </Link>
                    </div>
                </div>       
            </div>

        </div>
    )
}