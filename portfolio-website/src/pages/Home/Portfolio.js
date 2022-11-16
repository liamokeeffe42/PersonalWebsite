import React from 'react';
import { useState } from 'react';

import "./Portfolio.css";

function Portfolio() {
    const [flipTopLeft, setFlipTopLeft] = useState(false);
    const [flipTopRight, setFlipTopRight] = useState(false);
    const [flipBottomLeft, setFlipBottomLeft] = useState(false);
    const [flipBottomRight, setFlipBottomRight] = useState(false);

    return (
        <div className="homepage-container-col">
            <h3 className="home-module-title">My Work</h3>
            <p id="portfolio-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. R</p>
            <div id="portfolio-grid">
                <div className="portfolio-grid-item" style={{backgroundColor: '#FBCEB1'}}>
                    <div className="grid-item-front" onClick={() => setFlipTopLeft(!flipTopLeft)}>
                        <p className="grid-item-title">Portable Air Cleaner Calculator</p>
                    </div>
                    <div className="grid-item-back" onClick={() => setFlipTopLeft(!flipTopLeft)}>
                        <p className="grid-item-text">Collaborated with the WA State Dept of Commerce on a website that assists business owners in selecting a portable air cleaner that will maintain a safe environment from viruses like COVID-19</p>
                    </div>    
                </div>
                <div className="portfolio-grid-item" style={{backgroundColor: '#89CFEF'}}>
                    <p className="grid-item-title">Barbot</p>
                    <p className="grid-item-text">Robotic drink maker with 6 motor-controlled dispensers powered by a Raspberry Pi. Built a React web application with a MongoDB database to allow users to login, create recipes, and make drinks!</p>
                </div>
                <div className="portfolio-grid-item" style={{backgroundColor: '#007f4f'}}>
                    <p className="grid-item-title">NBA Scores Extension</p>
                    <p className="grid-item-text"></p>
                </div>
                <div className="portfolio-grid-item" style={{backgroundColor: '#fea49f'}}>
                    <p className="grid-item-title">Class Work</p>
                    <p className="grid-item-text"></p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;