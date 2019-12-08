import React from 'react';
import './button.css';

import Arrow from '../arrow/arrow';

const Button = ({children, secondary}) => (
    <div className={`btn-container ${secondary ? 'btn-secondary' : ''}`}>
        <div className="button-wrapper">
            <p>{children}</p>
            <Arrow/>
        </div>
    </div>
)

export default Button;