import React from 'react';
import { Link } from 'react-router-dom';
import './CodeGirlz.css';
import CodeGirlzHome from '../CodeGirlzHome.png';
import CodeGirlzDashboard from '../CodeGirlzDashboard.png';
import CodeGirlzReplit from '../CodeGirlzReplit.png';
import WebsiteIcon from '../websiteicon.png';
import GitHubIcon from '../githubicon.png';
import Footer from './Footer';

export default function CodeGirlz () {
    return (
        <div className='codegirlz-wrapper'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <Link to='/'>ginaRussell</Link>
                </div>
            </nav>
            <div className='project-section'>
                <h1>CodeGirlz</h1>
                <div className='img-wrapper'>
                    <img src={CodeGirlzHome} />
                </div>
                <div className='project-intro'>
                    <h3>Overview</h3>
                    <p>
                        I created CodeGirlz to deliver a self-designed and created introductory Python curriculum free online targeted to middle school girls.
                        The project includes the landing page, a curriculum dashboard page, and lesson, challenge, and project pages.
                        Lesson, challenge and project text is supplemented with embedded YouTube instructional videos and code examples using the Repl.it IDE.
                    </p>
                    <p>
                        I functioned as the sole curriculum and application developer for this project.
                        The application is built with React, JavaScript, HTML, and CSS.
                        The project is currently <span className='italic'>under construction</span> and is deployed with Netlify and hosted on GitHub.
                    </p>
                    <div className='project-links'>
                        <a href='https://codegirlz.netlify.app/' target='_blank' ><img src={WebsiteIcon} width='30px' alt='weblink icon' /></a>
                        <a href='https://github.com/ginabethrussell/code_girlz' target='_blank'><img src={GitHubIcon} width='30px' alt='github icon' /></a>
                    </div>
                </div>
                <div className='project-purpose'>
                    <h3>Purpose and Goal</h3>
                    <p>
                        I started coding in order to teach introductory computer science to students in my local community who didn't have affordable and easily accessible opportunities.
                        Early in my learning I connected with Awesome Inc in central Kentucky and had the opportunity to continue learning while teaching web development to middle school students through after school classes and summer camps. In most settings I found myself with classrooms almost entirely made up of boys.
                    </p>
                    <p>
                        The purpose of this project was to create a self-designed introductory Python curriculum that would be freely available and appealing to middle school girls.
                        From my previous teaching experience middle school seemed to be the <span className='italic'>sweet spot.</span> Middle school girls were still open to trying new things. 
                        However, many coding curriculums I had previously taught were often game-centered and were not appealing to the girls in my classes. 
                    </p>
                    <p>
                        My goal was to create and offer a fun, introduction to coding through a platform targeted for these girls in both style and approach. The lessons are clear, perhaps more wordy than most, but give girls a clear way to measure their progress and see how their new abilities enable them to build their own creative projects.
                        The course covers both programming fundamentals and problem solving using many tools including flowchart and pseudocode. The focus is not <span className='italic' >follow this tutorial to build a game</span>, but instead, <span className='italic'>build these skills so you can have your own superpower to create!</span>
                    </p>
                
                </div>
                <div className='project-walkthrough'>
                    <h3>Project Walkthrough</h3>
                    <div className='walkthrough-grid'>
                        <div className='walkthrough-page'>
                         
                            <div className='page-img-wrapper'>
                                <img src={CodeGirlzHome} />
                                <p>
                                    Landing Page with CTA Button
                                </p>
                            </div>
                        </div>
                        <div className='walkthrough-page'>
                        
                            <div className='page-img-wrapper'>
                                <img src={CodeGirlzDashboard} />
                                <p>
                                    Dashboard Page with grid of modules with descriptions
                                </p>
                            </div>
                        </div>
                        <div className='walkthrough-page'>
                    
                            <div className='page-img-wrapper'>
                                <img src={CodeGirlzReplit} />
                                <p>
                                    Individual lesson, challenge and project pages
                                </p>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className='project-underconstruction'>
                    <h3>Under Construction</h3>
                    <p>
                        Convert curriculum written in Google Docs to JSX in React
                    </p>
                    <p>
                        Add instructional YouTube videos
                    </p>
                    <p>
                        Embed coding examples with Repl.it
                    </p>
                    <p>
                        Add the ability for community - share feedback and projects on the site
                    </p>
                
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