import React from 'react';

import facebookIcon from "../../assets/imgs/icon-facebook.png";
import githubIcon from "../../assets/imgs/icon-github.png";
import linkedinIcon from "../../assets/imgs/icon-linkedin.png";

function Socials() {
    return (
        <div id="container-footer-socials">
            <img className="footer-icon-social" src={facebookIcon} alt="Facebook Icon" />
            <img className="footer-icon-social" src={githubIcon} alt="GitHub Icon" />
            <img className="footer-icon-social" src={linkedinIcon} alt="LinkedIn Icon" />
        </div>
    );
}

export default Socials;