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

    var logo = {
        width: '15%',
    }

    return (
    <header className="App-header">
        <div style={header}>
            <img style={logo} src="http://eclipticbrewing.com/wp-content/themes/ecliptic/img/logo.png"></img>
            <p style={nav}><Link to="/" className="btn btn-dark">Home</Link> <Link to="/new-brew" className="btn btn-dark">New Brew</Link></p>
        </div>
    </header>
    );
}

export default Header;
