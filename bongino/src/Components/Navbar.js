import React, {
    Component
} from 'react';
//import { Link } from 'react-router-dom';
import logo from '../logo.png';
import {Link} from "react-router-dom"


export default class Navbar extends Component {
    render() {
        return ( 
            <header className="header default">
            <div>
                <div className="pb-0"></div>
                <div className="header__sticky-wrapper" style={{transform: "translateZ(0)",}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="wrapper">
                                <Link to='/'>
                                    <span className="logo">
                                        <img src={logo} alt="logotype"></img>
                                    </span> 
                                    </Link>
                                    <div className="hamburger-wrapper">
                                        <button className="hamburger hamburger--slider" type="button">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner"></span>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="nav-wrapper">
                                        <nav className="menu" role="navigation">
                                            <a className="menu__item" rol="link" href="/podcasts">Podcasts</a>
                                            <a className="menu__item" rol="link" href="/station-finder">Station Finder</a>
                                            <Link to='/newsletters'><span className="menu__item" rol="link">Newsletter</span></Link>
                                            <a rol="link" href="https://bonginoreport.com/" className className="menu__item">Bongino Report</a>
                                        </nav>
                                        <div className="social-icons">
                                            <a href="https://facebook.com/dan.bongino" className>
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                            <a href="https://twitter.com/dbongino" className>
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="https://instagram.com/dbongino" className>
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                            <a href="https://soundcloud.com/dan-bongino" className>
                                                <i className="fa fa-soundcloud"></i>
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="billboard_1"></div>
                </div>
            </div>
        </header>
        )
    }
}