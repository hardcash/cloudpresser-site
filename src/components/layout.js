import React from 'react';
import Anime from 'react-anime';
import '../assets/scss/main.scss';
import Footer from './Footer';


class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <svg className="header-animation" viewBox="0 0 640 640">
        <Anime
          key={11+Date.now()}
          duration={2000}
          loop={false}
          easing="easeOutSine"
          d={['M208.46 -136.57C105.63 -136.57 22.24 -61.57 22.24 30.96C22.24 34.44 22.35 37.93 22.61 41.34C-51.67 55.42 -106.29 102.54 -106.29 158.51C-106.29 158.51 -106.29 158.51 -106.29 158.51C-106.29 225.59 -27.87 279.97 68.87 279.97C112.81 279.97 464.31 279.97 508.24 279.97C604.97 279.97 683.4 225.59 683.4 158.51C683.4 158.51 683.4 158.51 683.4 158.51C683.4 100.03 623.79 51.21 544.42 39.67C537.31 -23.74 477.81 -73.23 405.47 -73.23C389.56 -73.23 374.31 -70.83 360.07 -66.44C326.25 -108.9 270.96 -136.57 208.46 -136.57Z']}
        >   
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="gradientb8NVkaJlj" gradientUnits="userSpaceOnUse"
                cx="276.08" cy="-77.47" dx="288.67" dy="558.82" r="636.42">
                <stop stop-color= "#228ee6" stop-opacity= "1" offset="0%" />
                <stop className="background-gradient" stop-color="#cb42f4" stop-opacity="1" offset="100%" />
            </radialGradient>   
    <path style={{fill:'url(#gradientb8NVkaJlj)'}} d="M292.5 77.86C257.19 77.86 228.56 107.76 228.56 144.64C228.56 146.02 228.6 147.41 228.69 148.78C203.19 154.38 184.43 173.17 184.43 195.48C184.43 195.48 184.43 195.48 184.43 195.48C184.43 222.21 211.36 243.89 244.57 243.89C259.66 243.89 380.34 243.89 395.43 243.89C428.64 243.89 455.57 222.21 455.57 195.48C455.57 195.48 455.57 195.48 455.57 195.48C455.57 172.17 435.1 152.71 407.85 148.11C405.41 122.83 384.98 103.11 360.14 103.11C354.68 103.11 349.44 104.06 344.55 105.81C332.94 88.89 313.96 77.86 292.5 77.86Z"  />
    </Anime></svg>
        <div id="wrapper">

          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
