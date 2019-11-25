import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'

function About() {
    return (
        <body>
            <Navbar />
            <main>
                <section className="about">
                    <div className="about__bio-image">
                        <div className="about__bio">
                            <h2 className="text-secondary">About me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa sapiente rerum dolores aliquam, fugiat eveniet commodi. Vel, nihil, numquam possimus deserunt officiis rerum in omnis error esse iusto quas.</p>
                        </div>
                    </div>

                    <div className="jobs">
                        <div className="jobs__job">
                            <h2 className="text-secondary">2017 - Current</h2>
                            <h3>Google</h3>
                            <h6>Full Stack Developer</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
                        </div>
                        <div className="jobs__job">
                            <h2 className="text-secondary">2015 - 2017</h2>
                            <h3>Microsoft</h3>
                            <h6>Front End Developer</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
                        </div>
                        <div className="jobs__job">
                            <h2 className="text-secondary">2012 - 2015</h2>
                            <h3>Web Design Co.</h3>
                            <h6>Graphic Designer</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
                        </div>
                    </div>
                    <Footer/>
                </section>
            </main>
        </body>

    )

}


export default About;



