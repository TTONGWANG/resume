import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import '../scss/main.scss'

class Navbar extends React.Component {
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
            <header>
                <div onClick={this.toggleMenu} ref="myfirstDiv" className="menu-btn">
                    <i className={hamburger}><FontAwesomeIcon icon={faAngleDoubleUp} /></i>
                </div>

                <nav ref="mythreeDiv" className={nav}>
                    <ul ref="myfourDiv" className={menuNav}>
                        <li ref="myfiveDiv" className={navItems}>
                            <Link to="/Index">Home</Link>
                        </li>
                        <li ref="myfiveDiv" className={navItems}>
                            <Link to="/About">About Me</Link>

                        </li>
                        <li ref="myfiveDiv" className={navItems}>
                            <Link to="/Projects">My Projects</Link>
                        </li>
                        <li ref="myfiveDiv" className={navItems}>
                            <Link to="/Contact">Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;