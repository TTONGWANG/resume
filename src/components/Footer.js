import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../scss/main.scss'

function Footer(){
    return(
        <>
            <div className = "social-icons">
                <a href = "https://github.com/TTONGWANG" target = '_blank' rel="noopener noreferrer" className = "social-icons__icon" ><FontAwesomeIcon icon={faGithub} /></a>
                <a href = "https://www.linkedin.com/in/tong-wang-657652191/" rel="noopener noreferrer" target = '_blank' className = "social-icons__icon" ><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <footer>
                &copy; Copyright 2019 
            </footer>
        </>
    )
}

export default Footer;