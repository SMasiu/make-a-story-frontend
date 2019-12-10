import React, {useEffect, useState} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Hamburger from '../hamburger/hamburger';

const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll)
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, [])

    const toogleNav = () => {
        setOpenNav(!openNav);
    }

    const handleOnScroll = () => {
        let hedaer = document.querySelector('.main-header');
            if(hedaer) {
                if(hedaer.offsetTop === 0) {
                    hedaer.classList.remove('header-small');
                } else {
                    hedaer.classList.add('header-small');
                }
            }
    }

    return (
        <header className="header-wrapper main-header">
            <div className="header-logo-wrapper">
                <Logo/>
            </div>
            <div className="hamb-wrapper">
                <div className="hamb-inner-wrapper" onClick={toogleNav}>
                    <Hamburger/>
                </div>
            </div>
            <div className={`header-nav-wrpper ${openNav ? 'header-nav-wrapper-open':''}`}>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;