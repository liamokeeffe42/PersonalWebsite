import React from 'react';

import Socials from './Socials';
import Navbar from './Navbar';
import EmailForm from './EmailForm';

import phoneIcon from "../../assets/imgs/icon-phone.png";
import emailIcon from "../../assets/imgs/icon-email.png";

import "./Footer.css";

function Footer() {
    return (
        <div id="container-footer">
            <div id="container-footer-contact">
                <h2 className="home-module-title">Message Me</h2>
                <div id="container-footer-links">
                    <div id="container-contact-info">
                        <div>
                            <img className="footer-icon" src={phoneIcon} alt="Phone Number Icon" /><span>(858) 925 - 3401</span>
                        </div>
                        <div>
                            <img className="footer-icon" src={emailIcon} alt="Email Icon" /><span>liamkokeeffe@gmail.com</span>
                        </div>
                    </div>
                    <Socials />
                </div>
                <Navbar />
            </div>
            <div id="container-footer-email">
                <EmailForm />
            </div>
        </div>
    );
}

export default Footer;