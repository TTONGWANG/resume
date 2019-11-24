import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import '../scss/_about.scss'
import '../scss/main.scss'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuBtn: "menu-btn",
            hamburger: "menu-btn__burger",
            nav: "nav",
            menuNav: "menu-nav",
            navItems: "menu-nav__item",
            isToggleOn: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
            hamburger: this.state.isToggleOn ? 'menu-btn__burger' : 'menu-btn__burger open',
            nav: this.state.isToggleOn ? 'nav' : 'nav open',
            menuNav: this.state.isToggleOn ? 'menu-nav' : 'menu-nav open',
            navItems: this.state.isToggleOn ? 'menu-nav__item' : 'menu-nav__item open',
        })
    }

    render() {
        const {hamburger, nav, menuNav, navItems } = this.state;
        // console.log(hamburger)
        console.log(nav)
        console.log(menuNav)

        return (
            <body>
                <header>
                    <div onClick={this.toggleMenu} ref="myfirstDiv" className="menu-btn">
                        <span ref="mysecondDiv" className={hamburger}></span>
                    </div>

                    <nav ref="mythreeDiv" className={nav}>
                        <ul ref="myfourDiv" className={menuNav}>
                            <li ref="myfiveDiv" className={navItems}>
                                 <Link to = "/Index">Home</Link>
                            </li>
                            <li ref="myfiveDiv" className={navItems}>
                                <Link to = "/Index">About Me</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <section className="about">
                        <div className="about__bio-image">
                            <div className="about__bio">
                                <h2 className="text-secondary">BIO</h2>
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

                        <div className="social-icons">
                            <a href="#!"><i className="github"><FontAwesomeIcon icon={faCoffee} /></i> </a>
                            <a href="#!"><i className="linkedIn"><FontAwesomeIcon icon={faCoffee} /></i></a>
                        </div>
                        <footer> &copy; Copyright 2019 </footer>
                    </section>
                </main>

            </body>
        )
    }
}


export default About;



