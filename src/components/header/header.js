import React, {useEffect} from 'react';
import './header.css';

import Logo from '../logo/logo';
import Nav from '../nav/nav';

const Header = () => {

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

    return (
        <header className="header-wrapper main-header">
            <div className="herader-left-box">
                <div className="header-logo-wrapper">
                    <Logo/>
                </div>
                <p>
                    <a href="index.html">Login</a>
                </p>
            </div>
            <div className="header-nav-wrpper">
                <Nav/>
            </div>
        </header>
    )
}

export default Header;