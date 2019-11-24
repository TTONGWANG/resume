import React from 'react';
import About from './About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
// import Main from './Main'

import '../scss/main.scss'

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuBtn:"menu-btn",
            hamburger:"menu-btn__burger",
            nav:"nav",
            menuNav:"menu-nav",
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

    render(){
        const {menuBtn, hamburger, nav, menuNav,navItems} = this.state;
        // console.log(hamburger)
        console.log(nav)
        console.log(menuNav)

    return (
        <body>
            <header>
                <div  onClick= {this.toggleMenu} ref = "myfirstDiv" className="menu-btn">
                    <span ref = "mysecondDiv" className={hamburger}></span>
                </div>

                <nav ref = "mythreeDiv" className={nav}>
                    <ul ref = "myfourDiv" className={menuNav}>
                        <li ref = "myfiveDiv" className={navItems}>
                        <Link to = "/Index"><a className="menu-nav__link" >
                            Home
                            </a></Link>
                        </li>
                        
                        <li ref = "myfiveDiv" className={navItems}>
                            <a className="menu-nav__link" >
                            <Link to = "/About">About Me</Link>
                            </a>
                        </li>
                        <li ref = "myfiveDiv" className={navItems}>
                            <a href="Projects.html" className="menu-nav__link" >
                                My Projects
                            </a>
                        </li>
                        <li ref = "myfiveDiv" className={navItems}>
                            <a href="Contact.html" className="menu-nav__link" >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="home">
                    <h2>Hi! my name is</h2>
                    <h1 className="home__name">
                        Tom <span className="home__name--last">Jerry</span>
                    </h1>
                    <h2>
                        Web Developer, Designer & Programmer
                    </h2>
                    <div className="social-icons">
                        <a href="#!"><i className="github"><FontAwesomeIcon icon={faCoffee} /></i> </a>
                        <a href="#!"><i className="linkedIn"><FontAwesomeIcon icon={faCoffee} /></i></a>
                    </div>
                    <footer> &copy; Copyright 2019 </footer>
                </section>
            </main>
            <script src="./Main.js"></script>
        </body>
    )
}
}


export default Index;