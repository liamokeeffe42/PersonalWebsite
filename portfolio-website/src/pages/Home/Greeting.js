import React from 'react';

import portrait from "../../assets/imgs/portrait.png";

import "./Greeting.css";

function Greeting() {
    return (
        <div className="homepage-container-row">
            <div id="greeting-container-title">
                <div>
                    <h3>Hello,</h3>
                    <h2>I'm Liam,</h2>
                    <h3>Front end focused software developer.</h3>
                </div>
                <button id="greeting-btn-learnmore">Learn More</button>
            </div>
            <div>
                <img src={portrait} id="greeting-img-portrait" />
            </div>
        </div>
    );
}

export default Greeting;