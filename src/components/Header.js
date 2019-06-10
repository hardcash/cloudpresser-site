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
            duration={2000}
            loop={false}
            easing="easeOutSine"
            top="10"
            left="0%"
            right="40%"
            ><h1><TextyAnim>{'CloudPresser.com'}</TextyAnim></h1></Anime>
        <p style={{display:'none'}}>Get your Applications to production in record time.</p>
    </header>
)

export default Header
