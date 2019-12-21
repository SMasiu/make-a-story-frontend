import React from 'react';
import './hamburger.css';

const Hamburger = ({open}) => (
    <div className={`hamburger-wrapper ${open ? 'hamburger-open' : ''}`}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default Hamburger;
