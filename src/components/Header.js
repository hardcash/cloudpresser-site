import React from 'react';
import logo from '../assets/images/logo.svg';


const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>CloudPresser</h1>
        <p>Get your Applications to production in record time.</p>
    </header>
)

export default Header
