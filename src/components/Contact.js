import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import '../scss/main.scss'

function Contact(){
    return(
        <div>
            <Navbar />
                <div className = "contact">
                    <h2>Contact Me..</h2>
                    <div className = "contact__list">
                        <div className = "detail">
                        <i ><FontAwesomeIcon icon={faEnvelopeSquare} /></i> Email
                        <a href = "mailto:tongwang.sp@gmail.com"> <div className="text">tongwang.sp@gmail.com</div></a>
                        </div>
                        <div className = "detail">
                        <i ><FontAwesomeIcon icon={faPhone} /></i> Phone
                        <div className="text">0416-875556</div>
                        </div>
                        <div className = "detail" >
                        <i ><FontAwesomeIcon icon={faAddressCard} /></i> Address
                        <div className="text">2 Shore line,Rhodes,Sydney</div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Contact;