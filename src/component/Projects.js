import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import projectimg1 from '../img/project-1.jpg'
import projectimg2 from '../img/project-2.jpg'
import projectimg3 from '../img/project-3.jpg'
import projectimg4 from '../img/project-4.jpg'
import projectimg5 from '../img/project-5.jpg'
import projectimg6 from '../img/project-6.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// import Main from './Main'

import '../scss/main.scss'

function Projects() {

    return (
        <body>
            <Navbar />
            <main>
                <section className="projects">
                    <div className="projects__bio-image">
                        <h1 className="text-secondary">My Projects</h1>
                    </div>

                    <div className="projects__items">
                        <div className="projects__item">
                            <img src={projectimg1} alt="My project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Github
                                </a>
                            </div>
                        </div>

                        <div className="projects__item">
                            <img src={projectimg2} alt="My project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Github
                                </a>
                            </div>
                        </div>

                        <div className="projects__item">
                            <img src={projectimg3} alt="My project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Github
                                </a>
                            </div>
                        </div>

                        <div className="projects__item">
                            <img src={projectimg4} alt="My project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Github
                                </a>
                            </div>
                        </div>

                        <div className="projects__item">
                            <img src={projectimg5} alt="My project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Github
                                </a>
                            </div>
                        </div>

                        <div className="projects__item">
                            <img src={projectimg6} alt="My project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="github"><FontAwesomeIcon icon={faCoffee} /></i>Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </main>
        </body>
    )
}



export default Projects;