import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import projectimg1 from '../img/project-1.jpg'
import projectimg2 from '../img/project-2.jpg'
import projectimg3 from '../img/project-3.jpg'
import '../scss/main.scss'
function Projects() {
    return (
        <div>
            <Navbar />
            <main>
                <section className="projects">
                    <div className="projects__bio-image">
                        <h1 className="text-secondary">My Projects</h1>
                    </div>

                     <div className="projects__items">
                        <div className="projects__item">
                            <img src={projectimg1} alt="My Project"/>
                                <div className="projects__btns">
                                    <a href="http://www.tong-w.com" target="_blank" rel="noopener noreferrer" class="projects__btn">
                                        <i className={faSearch}></i> Preview
                                    </a>
                                    <a href="https://github.com/TTONGWANG/resume" target="_blank" rel="noopener noreferrer" className="projects__btn">
                                        <i className={faGithub}></i> Github
                                    </a>
                                </div>
                            <h1>Personal Web</h1>
                        </div>
                         <div className="projects__item">
                            <img src={projectimg2} alt="My Project"/>
                                <div className="projects__btns">
                                    <a href="http://weatherapp-tong.s3-website-ap-southeast-2.amazonaws.com" rel="noopener noreferrer" target="_blank" className="projects__btn">
                                        <i className={faSearch}></i> Preview
                                        </a>
                                    <a href="https://github.com/TTONGWANG/weather_app" target="_blank" rel="noopener noreferrer" className="projects__btn">
                                        <i className={faGithub}></i> Github
                                    </a>
                                </div>
                            <h1>Weather App</h1>
                        </div>
                         <div className="projects__item">
                            <img src={projectimg3} alt="My Project"/>
                                <div className="projects__btns">
                                    <a href="#!" className="projects__btn">
                                        <i className={faSearch}></i> Preview
                                    </a>
                                    <a href="#!" className="projects__btn">
                                        <i className={faGithub}></i> Github
                                    </a>
                                </div>
                            <h1>HandyHero</h1>
                        </div>   
                    </div> 
                </section>
            </main>
            <Footer />
            </div>
    )
}

export default Projects;
