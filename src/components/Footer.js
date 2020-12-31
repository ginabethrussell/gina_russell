import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer-main'>
                <p>&copy; ginaRussell 2020</p>
                <div className='socialmedialinks'>
                    <p><a href='https://www.linkedin.com/in/gina-beth-russell/'>LinkedIn</a></p>
                    <p><a href='https://github.com/ginabethrussell'>GitHub</a></p>
                </div>
            </div>
            {/* <div className='footer-credits'>
                <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div> */}
        </div>
    )
}