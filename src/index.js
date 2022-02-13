import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer.jsx';
import Navi from './components/Navigation'

import Home from './components/Home.jsx';
import Upload from './components/StateUpload';
import Organize from './components/StateOrganize';
import Annotate from './components/StateAnnotate';
import Train from './components/StateTrain';
import Deploy from './components/StateDeploy';
import Instructions from './components/StateInstructions';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

ReactDOM.render(
    <Router>
        <Navi/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/Organize" element={<Organize />} />
            <Route path="/Annotate" element={<Annotate />} />
            <Route path="/Train" element={<Train />} />
            <Route path="/Deploy" element={<Deploy />} />
            <Route path="/Instructions" element={<Instructions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
// serviceWorker.unregister();