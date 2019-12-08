import React from 'react';
import './box.css';

const Box = ({children}) => {
    return (
        <section className="box-elem">
            {children}
        </section>
    )
}

export default Box;