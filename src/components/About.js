import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'

function About(){
    return(
        <div>
            <Navbar />
            <section className = "about">
                <div className = "about__img">
                    <div className = "about__img__bio">
                        <h2 className = "title">
                            About me
                        </h2>
                        <p>
                        Eager and diligent developer looking for a front-end/full-stack jobs. Good at modern network technology, and always looking for opportunities to develop new technology. Proven team players have good communication skills and always strive to understand the products and deliver product with highest quality.
                        </p>
                    </div>
                </div>

                <div className="about__jobs">
                        <div className="about__jobs__job">
                            <h2 className="date">2012 - 2014</h2>
                            <h3>The University of Liaoning Technology</h3>
                            <h2>Bachelor of Software Engineering</h2>
                            
                        </div>
                        <div className="about__jobs__job">
                            <h2 className="date">2017 - 2019</h2>
                            <h3>The University of New South Wales</h3>
                            <h2>Master of Information Technology</h2>
                            
                        </div>
                    </div>
            </section>
            <Footer />
        </div>
    )
}

export default About;