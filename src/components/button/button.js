import React from 'react';
import './button.css';

import Arrow from '../arrow/arrow';

const Button = ({children, secondary, submit}) => (
    <div className={`btn-container ${secondary ? 'btn-secondary' : ''}`}>
        <button className="button-wrapper" type={submit ? 'submit' : 'button'}>
            <p>{children}</p>
            <Arrow/>
        </button>
    </div>
)

export default Button;