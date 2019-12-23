import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import '../scss/main.scss'

function Contact() {

    return (
        <body>
            <Navbar />
            <main>
                <section className="contact">
                    <h2>Contact Me..</h2>
                    <div className="contact__list">
                        <div className="contact__email">
                            <i ><FontAwesomeIcon icon={faEnvelopeSquare} /></i> Email
                               <a href = "mailto:tongwang.sp@gmail.com"> <div className="text-secondary">tongwang.sp@gmail.com</div></a>
                        </div>
                        <div className="contact__phone">
                            <i ><FontAwesomeIcon icon={faPhone} /></i> Phone
                                <div className="text-secondary">0416875556</div>
                        </div>
                        <div className="contact__address">
                            <i ><FontAwesomeIcon icon={faAddressCard} /></i> Address
                                <div className="text-secondary">2 Shore line,Rhodes,Sydney</div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </main>
        </body>
    )

}


export default Contact;