import React, {useEffect, useState} from 'react';
import './header.css';

import Logo from '../logo/logo';
import Nav from '../nav/nav';

const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let hedaer = document.querySelector('.main-header');
            if(hedaer) {
                if(hedaer.offsetTop === 0) {
                    hedaer.classList.remove('header-small');
                } else {
                    hedaer.classList.add('header-small');
                }
            }
        })
        return () => {
            window.removeEventListener('scroll');
        };
    }, [])

    const toogleNav = () => {
        setOpenNav(!openNav);
    }

    return (
        <header className="header-wrapper main-header">
            <div className="header-logo-wrapper">
                <Logo/>
            </div>
            <div className="hamb-wrapper">
                <div className="hamb-inner-wrapper" onClick={toogleNav}>
                    hamb
                </div>
            </div>
            <div className={`header-nav-wrpper ${openNav ? 'header-nav-wrapper-open':''}`}>
                <p>
                    <a href="index.html">Login</a>
                </p>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;