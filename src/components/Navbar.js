import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar--wrapper"> 
                <img className="navbar--wrapper--logo" src={require('../images/small-logo.png')} alt="react-logo"/>
                <h3 className="navbar--wrapper--text">ReactFacts</h3>
            </div>
            <h4 className="navbar--text">React Course - Project 1</h4>  
        </nav>
    )
}