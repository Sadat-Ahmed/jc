import React from "react";

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">JCARE Coalition</h1>
            <ul className="navbar">
                <li><a href="#about">About</a></li>
                <li><a href="#info">What is Rezoning?</a></li>
                <li><a href="#city-says">What the City Says</a></li>
                <li><a href="#demands">Our Demands</a></li>
            </ul>
        </header>
    );
}

export default Header;
