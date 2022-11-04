import React from 'react';
import './Navbar.css';

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="container-navbar">
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/About">ABOUT</Link>
            </li>
            <li>
                <Link to="/Work">PORTFOLIO</Link>
            </li>
            <li>
                <Link to="/Contact">CONTACT</Link>
            </li>
        </div>
    );
}

export default Navbar;