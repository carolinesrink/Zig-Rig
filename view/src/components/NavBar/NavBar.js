import React from "react";
import "./NavBar.css"

const NavBar = () => (
    <nav id="nav-bar">
        Welcome!
        <a id="account" href="/account">
            Your account
        </a>
        <br />
        <a id="logout" href="/">
            Logout
        </a>
    </nav>
);

export default NavBar;