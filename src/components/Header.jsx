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
    return (
    <header className="App-header">
        <div style={header} className="jumbotron">
            <h1 className="App-title">The Salty Dog</h1>
            <p style={nav}><Link to="/">Home</Link> | <Link to="/new-brew">Add New Brew</Link></p>
        </div>
    </header>
    );
}

export default Header;
