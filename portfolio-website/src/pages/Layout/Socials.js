import React from 'react';
import { Link } from 'react-router-dom';

import facebookIcon from "../../assets/imgs/icon-facebook.png";
import githubIcon from "../../assets/imgs/icon-github.png";
import linkedinIcon from "../../assets/imgs/icon-linkedin.png";

function Socials() {
    return (
        <div id="container-footer-socials">
            <a href="https://www.facebook.com/liam.okeeffe.7503" className="footer-social-link" target="_blank">
                <img className="footer-icon-social" src={facebookIcon} alt="Facebook Icon" />
            </a>
            <a href="https://github.com/liamokeeffe42" className="footer-social-link" target="_blank">
                <img className="footer-icon-social" src={githubIcon} alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/l-okeeffe/" className="footer-social-link" target="_blank">
                <img className="footer-icon-social" id="footer-icon-lastsocial" src={linkedinIcon} alt="LinkedIn Icon" />
            </a>                
        </div>
    );
}

export default Socials;