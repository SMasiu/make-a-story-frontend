import React from 'react';
import './header.css';

import Logo from '../logo/logo';
import Nav from '../nav/nav';

const Header = () => (
    <header className="header-wrapper">
        <div className="herader-left-box">
            <Logo/>
            <p>
                <a href="index.html">Login</a>
            </p>
        </div>
        <Nav/>
    </header>
)

export default Header;