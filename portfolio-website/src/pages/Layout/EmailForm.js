import React from 'react';

import "./EmailForm.css";

function EmailForm() {
    return (
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
    );
}

export default EmailForm;