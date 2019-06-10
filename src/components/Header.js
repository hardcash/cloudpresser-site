import TextyAnim from 'rc-texty';
import React from 'react';
import Anime from 'react-anime';
const Header = (props) => (

    <header id="header" className="alt">
        <span className="polymorph">
            </span>
            <Anime
            key={12+Date.now()}
            delay={2500}
            duration={4000}
            loop={false}
            easing="easeOutSine"
            top="0"
            right="100%"
            ><h1><TextyAnim>{'CloudPresser.com'}</TextyAnim></h1></Anime>
        <Anime
            key={13+Date.now()}
            delay={4000}
            duration={4000}
            loop={false}
            easing="easeOutSine"
            opacity="1"
            ><div className="cta" style={{opacity:0}}><div><h2>Get it done without losing your hair</h2><p>Stress-free App and Web Development to get you in front of users in record time</p></div><div className="contact-form">Form will go here</div></div></Anime>
    </header>
)

export default Header
