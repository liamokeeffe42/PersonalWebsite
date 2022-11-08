import React from 'react';

import './Header.css';
import logo from "../../assets/imgs/logo.png"
import Navbar from "./Navbar.js";

function Header() {
    return (
        <div id="container-header">
            {/* <div id="container-logo"> */}
                <img src={logo} alt="Liam O'Keeffe's Logo" id="img-logo"/>
            {/* </div> */}
            <Navbar />
            <div id="container-right" />
        </div>
    );
}

export default Header;