import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Context from '../../store/context';
import './header.css';

import Logo from '../logo/logo';
import Nav from '../nav/nav';
import Hamburger from '../hamburger/hamburger';
import Axios from 'axios';
import { url } from '../../api.conf';

const Header = () => {

    const {state, actions} = useContext(Context);

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll)
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };
    }, [])

    const toogleNav = () => {
        setOpenNav(!openNav);
    }

    const handleOnScroll = () => {
        let hedaer = document.querySelector('.main-header');
        if(hedaer) {
            if(hedaer.offsetTop <= 40) {
                hedaer.classList.remove('header-small');
            } else {
                hedaer.classList.add('header-small');
            }
        }
    }

    const logout = () => {
        Axios.get(`${url}/user/logout`,{withCredentials: true})
            .then( ({data}) => {
                actions({type: 'user', payload: {}, command: 'clear'})
            })
            .catch( err => {
                console.log(err);
            });
    }

    return (
        <header className="header-wrapper main-header">
            <div className="header-logo-wrapper">
                <Logo/>
            </div>
            <div className="hamb-wrapper">
                <div className="hamb-inner-wrapper" onClick={toogleNav}>
                    <Hamburger/>
                </div>
            </div>
            <div className={`header-nav-wrpper ${openNav ? 'header-nav-wrapper-open':''}`}>
                {state.user.email ? <p onClick={logout}>{state.user.email}</p> : <p><Link to="/login">Login</Link></p>}
                <Nav/>
            </div>
        </header>
    )
}

export default Header;