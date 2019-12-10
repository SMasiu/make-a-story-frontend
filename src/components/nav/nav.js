import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Nav = () => (
    <nav className="nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Stories</Link></li>
            <li><Link to="/">Voting</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    </nav>
);

export default Nav;