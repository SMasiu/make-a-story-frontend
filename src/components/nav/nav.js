import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stories">Stories</Link></li>
            <li><a href="#contact-main">Contact</a></li>
        </ul>
    </nav>
);

export default Nav;