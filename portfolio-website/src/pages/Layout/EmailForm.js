import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

import "./EmailForm.css";

function EmailForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
        phone_number: ''
    });

    const [hasSubmit, setHasSubmit] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            toSend,
            `${process.env.REACT_APP_USER_ID}`
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setHasSubmit(true);
                resetFormValues();
            })
            .catch((err) => {
                console.log('FAILED...', err);
                resetFormValues();
            });
    };

    function resetFormValues() {
        setToSend({
            from_name: '',
            message: '',
            reply_to: '',
            phone_number: ''
        });
    }

    const onSubmitAgain = (e) => {
        setHasSubmit(false);
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value});
    };

    return (
        <div id="container-emailform" style={{
            display: hasSubmit ? 'flex' : 'block',
            alignItems: hasSubmit ? 'center' : '',
            justifyContent: hasSubmit ? 'center' : ''
        }}>
            <form id="container-emailform-form" onSubmit={onSubmit}
                style={{
                    display: hasSubmit ? 'none' : 'block'
                }}>
                <input type="text" id="emailform-input-name" name="from_name" value={toSend.from_name} onChange={handleChange} className="emailform-input" placeholder="Name" required />
                <label for="emailform-input-name" className="emailform-label">Name <span className="emailform-input-required">*</span></label>
                <input type="email" id="emailform-input-email" name="reply_to" value={toSend.reply_to} onChange={handleChange} className="emailform-input" placeholder="Email" required />
                <label for="emailform-input-email" className="emailform-label">Email <span className="emailform-input-required">*</span></label>
                <input type="text" id="emailform-input-phone" name="phone_number" value={toSend.phone_number} onChange={handleChange} className="emailform-input" placeholder="Number" />
                <label for="emailform-input-phone" className="emailform-label">Phone Number</label>
                <textarea type="text" id="emailform-input-textarea" name="message" value={toSend.message} onChange={handleChange} className="emailform-input" placeholder="Message" required />
                <label for="emailform-input-textarea" id="emailform-label-textarea">Message <span className="emailform-input-required">*</span></label>
                <button id="emailform-btn-submit" type="submit">SEND</button>
            </form>
            <div id="container-emailform-submitted"
                style={{
                    display: hasSubmit ? 'block' : 'none'
                }}>
                <p>Thanks for the message!</p>
                <button onClick={onSubmitAgain}>Submit Another</button>
            </div>
        </div>
    );
}

export default EmailForm;