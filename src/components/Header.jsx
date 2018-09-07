import React from "react";
import { Link } from 'react-router-dom';

function Header() {

    var header = {
        fontFamily: 'sans-serif',
        textAlign: 'center'
    }

    var nav = {
        padding: 30
    }

    var photo = {
        maxWidth: '200px'
    }

    var button = {
        margin: 5
    }

    return (
    <header className="App-header">
        <div style={header}>
            <img style={photo} src="http://eclipticbrewing.com/wp-content/themes/ecliptic/img/logo.png"></img>
            <p style={nav}>
                <Link style={button} to="/" className="btn btn-dark">Home</Link> 
                <Link style={button} to="/new-brew" className="btn btn-dark">New Brew</Link>
                <Link style={button} to="/about-us" className="btn btn-dark">About Us</Link>
            </p>
        </div>
    </header>
    );
}

export default Header;
