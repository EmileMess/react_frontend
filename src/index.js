import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navi from './components/Navigation/Navigation'
import Footer from './components/Navigation/Footer.jsx';

import Home from './components/Navigation/Home.jsx';
import Upload from './components/Tools/Upload/StateUpload';
import Organize from './components/Tools/Organize/StateOrganize';
import Annotate from './components/Tools/Annotate/StateAnnotate';
import Train from './components/Tools/Train/StateTrain';
import Deploy from './components/Tools/Deploy/StateDeploy';
import Instructions from './components/StateInstructions';
import About from './components/Navigation/About.jsx';
import Contact from './components/Navigation/Contact.jsx';

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