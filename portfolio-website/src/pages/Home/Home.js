import React from 'react';
import Layout from '../Layout/Layout.js';
import AboutMe from './AboutMe.js';
import Greeting from './Greeting.js';

import "./Home.css";
import Portfolio from './Portfolio.js';

function Home() {
    return (
        <Layout>
            <div id="home-container">
                <Greeting />
                <AboutMe />
                <Portfolio />
            </div>
        </Layout>
    );
}

export default Home;