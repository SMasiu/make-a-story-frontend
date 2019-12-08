import React from 'react';
import './button.css';

import Arrow from '../arrow/arrow';

const Button = ({children}) => (
    <div className="btn-container">
        <div className="button-wrapper">
            <p>{children}</p>
            <Arrow/>
        </div>
    </div>
)

export default Button;