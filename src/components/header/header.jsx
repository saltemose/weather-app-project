import React from 'react';
import ReactLogo from "../../images/sun.svg";



class Header extends React.Component {


render() {
    
        
        return (
            <div className="navbar">
            <span className="logo-container">
            <img alt="" className="logo" src={ReactLogo}/>
            </span>
            <span className="title"><h1>Weather</h1></span>
            </div>
        )
    }
}

export default Header;