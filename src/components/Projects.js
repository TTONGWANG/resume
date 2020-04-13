import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <div className="projects">
                <div className="projects__img">
                    <h1>My Projects</h1>
                </div>
                <div className="projects__items">
                    <div className="projects__items__item">
                        <img src={projectimg1} alt="My project" />
                        <div className="projects__btns">
                            <a href="http://www.tong-w.com" target="_blank" >
                                <i><FontAwesomeIcon icon={faSearch} /></i>Preview
                                </a>
                            <a href="https://github.com/TTONGWANG/resume" target="_blank"  >
                                <i><FontAwesomeIcon icon={faGithub} /></i>Github
                                </a>
                        </div>
                        <h2>Personal Website</h2>
                    </div>

                    <div className="projects__items__item">
                        <img src={projectimg2} alt="My project" />
                        <div className="projects__btns">
                            <a href="http://weatherapp-tong.s3-website-ap-southeast-2.amazonaws.com" target="_blank" >
                                <i><FontAwesomeIcon icon={faSearch} /></i>Preview
                                </a>
                            <a href="https://github.com/TTONGWANG/weather_app" target="_blank" >
                                <i><FontAwesomeIcon icon={faGithub} /></i>Github
                                </a>
                        </div>
                        <h2>Weather App</h2>
                    </div>

                    <div className="projects__items__item">
                        <img src={projectimg3} alt="My project" />
                        <div className="projects__btns">
                            <a href="http://www.ehandyhero.com" className="projects__btns__btn">
                                <i><FontAwesomeIcon icon={faSearch} /></i>Preview
                            </a>
                            <a href="#!" className="projects__btns__btn">
                                <i><FontAwesomeIcon icon={faGithub} /></i>Github
                            </a>
                        </div>
                        <h2>Information service website</h2>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Projects;
