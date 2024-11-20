import React from "react";

function Header() {
    return (
        <header className="header">
            {/* Replace header title with an icon-sized logo */}
            <img src="/images/logo3.png" alt="JCare Logo" className="header-logo" />
            <p className="header-subtitle">“REZONING IS THE FIRST STEP IN SELLING A NEIGHBORHOOD TO RICH PEOPLE”</p>
        </header>
    );
}

export default Header;
