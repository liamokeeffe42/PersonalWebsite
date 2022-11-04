import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Home from "./pages/Home/Home.js";
import Work from "./pages/Work/Work.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Work" element={<Work />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;