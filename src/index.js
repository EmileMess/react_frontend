import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import "./mycss.css"
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/lineicons.css";
import "./assets/css/ud-styles.css";

// Components
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
import Signin from './components/Navigation/Signin.jsx';
import Signup from './components/Navigation/Signup.jsx';
import Pricing from './components/Navigation/Pricing.jsx';

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
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer/>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();