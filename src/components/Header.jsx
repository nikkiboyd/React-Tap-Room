import React from "react";
import { Link } from 'react-router-dom';


function Header() {
    return (
    <header className="App-header">
        <div class="jumbotron">
            <h1 className="App-title">Tap Room</h1>
            <Link to="/">Home</Link> | <Link to="/new-brew">Add Brew to Menu</Link>
        </div>
    </header>
    );
}

export default Header;
