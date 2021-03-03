import React from 'react';

import './Skills.css';

function Skills() {
    return (
        <div id='skills' className='skills-wrapper'>
             <h2> Education &amp; Skills</h2>
            <p className='skills-text'>
                I am a full stack web development student at Lambda School, graduating in April 2021.</p>
            <p className='skills-text'>
                <a href=''>Lambda School</a> is an 6-month full-time computer science &amp; software engineering program that provides an immersive hands-on curriculum with a focus on computer science, and full-stack web development.</p>
            <h5 className='skills-text'>
                My Skills
            </h5>
            <ul className='skills-list'>
                <li>
                    Semantic HTML5
                </li>
                <li>
                    CSS3
                </li>
                <li>
                    JavaScript ES6
                </li>
                <li>
                    React
                </li>
                <li>
                    Redux
                </li>
                <li>
                    Python
                </li>
                <li>
                    Java
                </li>
                <li>
                    Java/Spring Rest Web APIs
                </li>
                <li>
                    PostgreSQL
                </li>
                <li>
                    GitHub and git version control
                </li>
            </ul>
        </div>
    )
}

export default Skills;
