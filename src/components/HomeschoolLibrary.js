import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import HomePage from '../HomeschoolHome.png';
import Signup from '../HomeschoolSignup.png';
import Login from '../HomeschoolLogin.png';
import Library from '../HomeschoolLibrary.png';
import WebsiteIcon from '../websiteicon.png';
import GitHubIcon from '../githubicon.png';
import developer from '../girl.png';

import './HomeschoolLibrary.css';

export default function HomeschoolLibrary () {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='library-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img width='30px' src={developer} alt='girl developer logo'/>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='project-section'>
                <h1>Homeschool Library Manager</h1>
                <div className='img-wrapper'>
                    <img src={HomePage} />
                </div>
                <div className='project-intro'>
                    <h3>Overview</h3>
                    <p>
                        I created Homeschool Library Manager to solve a particular pain point I endured while a homeschool mom.
                        I wanted my children to have access to as many good books as I could create room for but having so many books created problems. </p>
                        <p>
                        When away from my home, it was often difficult to remember all the titles I already owned, or if a missing title had been loaned to another family. At bookstores, used book sales, and homeschool conventions, not having access to my current home library created unneeded stress and either duplicate purchase or often missed opportunities.
                    </p>
                    <p>
                        I functioned as the sole curriculum and application developer for this project.
                        The application is built with React, Redux, JavaScript, HTML, and CSS.
                        The project is currently <span className='italic'>under construction</span> and is deployed with Netlify and hosted on GitHub.
                    </p>
                    <div className='project-links'>
                        <a href='https://homeschool-library-manager.vercel.app/' target='_blank' ><img src={WebsiteIcon} width='30px' alt='weblink icon' /></a>
                        <a href='https://github.com/ginabethrussell/homeschool-library-manager' target='_blank'><img src={GitHubIcon} width='30px' alt='github icon' /></a>
                    </div>
                </div>
                <div className='project-purpose'>
                    <h3>Purpose and Goal</h3>
                    <p>
                        Coming Soon
                    </p>
                    <p>
                        
                    </p>
                    <p>
                        
                    </p>
                
                </div>
                <div className='project-walkthrough'>
                    <h3>Project Walkthrough</h3>
                    <div className='walkthrough-grid'>
                        <div className='walkthrough-page'>
                         
                            <div className='page-img-wrapper'>
                                <img src={HomePage} />
                                <p>
                                    Landing Page with CTA Button
                                </p>
                            </div>
                        </div>
                        <div className='walkthrough-page'>
                        
                            <div className='page-img-wrapper'>
                                <img src={Signup} />
                                <p>
                                    Signup Page
                                </p>
                            </div>
                        </div>
                        <div className='walkthrough-page'>
                    
                            <div className='page-img-wrapper'>
                                <img src={Login} />
                                <p>
                                    Login Page
                                </p>
                            </div>
                        </div>
                        <div className='walkthrough-page'>
                    
                            <div className='page-img-wrapper'>
                                <img src={Library} />
                                <p>
                                    Personal Library Page 
                                </p>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className='project-underconstruction'>
                    <h3>Under Construction</h3>
                    <ul>
                        
                    </ul>
                
                </div>
            </div>
            <Footer />
        </div>
    )
 }

// Spotlight
// 50
// • What is the “killer feature” of your project? What feature does it have that took the
// most work, or was the most technically impressive? Some possible examples:
// ◦ User authentication
// ◦ A feed of items fetched from a database
// ◦ A particularly tricky UI element (eg. autocomplete, calendar, drag-and-drop)
// ◦ Anything you’re proud of!
// • What were the technical hurdles that got in your way? Any major problems you hit
// during development?
// • How did you solve those problems? What was the solution? Go deep here, and write
// with a developer in mind.
// Current status
// • This section is optional. If the project is actively being used by real people, talk a little
// bit about the current status, who uses it, why they use it, what they say to you about
// it, stuff like that.
// • If the project was contrived specifically for the portfolio, omit this section.
// Lessons Learned
// • What did you learn doing this project? Feel free to list multiple things. Also feel free to
// cover non-technical lessons. It’s great to talk about how you learned to use an
// advanced feature of a framework or library, but it’s just as valuable to talk about
// project-management experience, or things you learned about shipping projects.
// • If you used a framework or other libraries/tools, was it a good choice? How did it
// help? In which ways was it insufficient?
// • Is your project accessible? What did you learn about accessibility, while building this
// project? Describing how you tested your project using keyboard navigation or a screenreader
// can make for a really compelling story!
// • How has this affected the work you’ve done since then? 
