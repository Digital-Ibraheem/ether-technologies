import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-VQDN47S4R1");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

