import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <>
            <div className="social-icons">
                <a href="#!"><i className="github"><FontAwesomeIcon icon={faGithub} /></i> </a>
                <a href="#!"><i className="linkedIn"><FontAwesomeIcon icon={faLinkedin} /></i></a>
            </div>
            <footer> &copy; Copyright 2019 </footer>
        </>
    )
}

export default Footer;