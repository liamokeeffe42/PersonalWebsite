import React from 'react';

import Navbar from "./Navbar.js";
import logo from "../../assets/imgs/logo-nobackground.png";

import phoneIcon from "../../assets/imgs/icon-phone.png";
import emailIcon from "../../assets/imgs/icon-email.png";
import facebookIcon from "../../assets/imgs/icon-facebook.png";
import githubIcon from "../../assets/imgs/icon-github.png";
import linkedinIcon from "../../assets/imgs/icon-linkedin.png";

import "./Footer.css";

function Footer() {
    return (
        <div id="container-footer">
        <h2>Contact Us</h2>
            <div id="container-footer-bottom">
                <div id="container-footer-contact">
                    <div id="container-footer-links">
                        <div id="container-contact-info">
                            <div>
                                <img className="footer-icon" src={phoneIcon} alt="Phone Number Icon" /><span>(858) 925 - 3401</span>
                            </div>
                            <div>
                                <img className="footer-icon" src={emailIcon} alt="Email Icon" /><span>liamkokeeffe@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <img className="footer-icon-social" src={facebookIcon} alt="Facebook Icon" />
                            <img className="footer-icon-social" src={githubIcon} alt="GitHub Icon" />
                            <img className="footer-icon-social" src={linkedinIcon} alt="LinkedIn Icon" />
                        </div>
                    </div>
                    <div id="container-footer-menu">
                        <p className="footer-menu-title">Home</p>
                        <div>
                            <p className="footer-menu-title">About</p>
                            <p>Background</p>
                        </div>
                        <div>
                            <p className="footer-menu-title">Portfolio</p>
                            <p>Background</p>
                            <p>Projects</p>
                            <p>Resume</p>
                        </div>
                        <p className="footer-menu-title">Contact</p>
                    </div>
                </div>
                <div id="container-footer-email">
                    <form id="footer-form">
                        <input type="text" id="footer-input-name" name="name" className="footer-input" placeholder="Name" />
                        <label for="footer-input-name" className="footer-label">Name <span className="footer-input-required">*</span></label>
                        <input type="text" id="footer-input-email" name="email" className="footer-input" placeholder="Email" />
                        <label for="footer-input-email" className="footer-label">Email <span className="footer-input-required">*</span></label>
                        <input type="text" id="footer-input-phone" name="phoneNumber" className="footer-input" placeholder="Number" />
                        <label for="footer-input-phone" className="footer-label">Phone Number</label>
                        <textarea type="text" id="footer-input-textarea" name="message" className="footer-input" placeholder="Message" />
                        <label for="footer-input-textarea" id="footer-label-textarea">Message <span className="footer-input-required">*</span></label>
                        <button id="footer-btn-submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;