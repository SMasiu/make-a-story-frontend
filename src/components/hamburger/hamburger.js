import React, {useState} from 'react';
import './hamburger.css';

const Hamburger = () => {

    const [openHamb, setOpenHamb] = useState(false);

    const toogleOpenHamb = () => {
        setOpenHamb(!openHamb);
    }

    return (
        <div className={`hamburger-wrapper ${openHamb ? 'hamburger-open' : ''}`} onClick={toogleOpenHamb}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}

export default Hamburger;
