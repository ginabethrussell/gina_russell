import React from 'react';
import { Link } from 'react-router-dom';

import CodeGirlzHome from '../CodeGirlzHomePage.png';
import upGradeHome from '../upgradeHome.png'
import anywhereFitness from '../anywherefitness.png';
import homeschoolHome from '../HomeschoolHome.png'

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
            <div id='homeschool-library' className='project-main'>
                <div className='project-info'>
                    <div className = 'project-title'>
                        <h3>Homeschool Library Manager</h3>
                    </div>
                    <p>A React single page application designed to manage and access a homeschool library.</p>
                    <div className='view-project'>
                        <Link to='/project/homeschoollibrary'>
                            Project Details
                        </Link>
                    </div>   
                </div>
                <div className='project-img'>
                    <img width='500px' src={homeschoolHome} />
                </div>   
            </div>
            {/* <div id='anywherefitness' className='project-main'>
                <div className='project-img'>
                    <img width='500px' src={anywhereFitness} />
                </div>
                <div className='project-info'>
                    <div className = 'project-title'>
                        <h3>Anywhere Fitness</h3>
                    </div>
                    <p>A full stack web application created with a cross-functional team.</p>
                    <div className='view-project'>
                        <Link to='/project/anywherefitness'>
                            Project Details
                        </Link>
                    </div>
                </div>       
            </div> */}
            {/* <div id='upgradetutors' className='project-main'>
                <div className='project-info'>
                    <div className = 'project-title'>
                        <h3>upGrade Tutors</h3>
                    </div>
                    <p>A full stack web application created with a cross-functional team.</p>
                    <div className='view-project'>
                        <Link to='/project/upgradetutors'>
                            Project Details
                        </Link>
                    </div>   
                </div>
                <div className='project-img'>
                    <img width='500px' src={upGradeHome} />
                </div>   
            </div> */}
        </div>
    )
}