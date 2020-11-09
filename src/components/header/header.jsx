import React from 'react';
import ReactLogo from "../../images/sun.svg";



class Header extends React.Component {

    constructor(props){
        super(props);
    }

render() {
    
        
        return (
            <div className="navbar">
            <span className="logo-container">
            <img className="logo" src={ReactLogo}/>
            </span>
            <span className="title"><h1>Weather</h1></span>
            </div>
        )
    }
}

export default Header;