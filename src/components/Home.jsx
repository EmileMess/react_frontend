import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import '..//App.css';
import imagetest from '..//images/static/cv.jpg'
import imgUpload from '..//images/static/Upload.svg'
import imgOrganize from '..//images/static/Organize.svg'
import imgAnnotate from '..//images/static/Annotate.svg'
import imgTrain from '..//images/static/Train.svg'
import imgDeploy from '..//images/static/Deploy.svg'

function Home() {
    return (
        <div className="BackgroundFlow">
            <div className="career-banner">
                <a href={'/About'} >New Feature: Annotate just received a big upgrade. Read about it on our blog &#8594;</a>
            </div>
            <br/>
            <br/>
            <div>
                <li>
                    <NavLink to="/">
                        AIGUI
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tool">
                        Tool
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </div>
            <div className="BackgroundUpper">
                <div className="Space1"></div>

                <div className="TitleBlock">
                    <h1>Give your software the sense of sight</h1>
                    <h2>With a few images, you can train a working computer vision model in an afternoon.</h2>
                    <a className="TryLink" href="/tool">Try It Now &#187;</a>
                    <br/>
                    <br/>
                    <hr/>
                    <div className="steps__grid">
                        <a href="#section1" className="steps__step">
                            <div className="steps__icon">
                                <img className="logoimg1" alt="Upload" src={imgUpload} />
                            </div>
                            <div className="steps__title">
                                Upload
                            </div>
                        </a>
                        <a href="#section2" className="steps__step">
                            <div className="steps__icon">
                                <img className="logoimg2" alt="Organize" src={imgOrganize} />
                            </div>
                            <div className="steps__title">
                                Organize
                            </div>
                        </a>
                        <a href="#section3" className="steps__step">
                            <div className="steps__icon">
                                <img className="logoimg1" alt="Annotate" src={imgAnnotate} />
                            </div>
                            <div className="steps__title">
                                Annotate
                            </div>
                        </a>
                        <a href="#section4" className="steps__step">
                            <div className="steps__icon">
                                <img className="logoimg2" alt="Train" src={imgTrain} />
                            </div>
                            <div className="steps__title">
                                Train
                            </div>
                        </a>
                        <a href="#section5" className="steps__step">
                            <div className="steps__icon">
                                <img className="logoimg1" alt="Deploy" src={imgDeploy} />
                            </div>
                            <div className="steps__title">
                                Deploy
                            </div>
                        </a>
                    </div>
                </div>
                <div className="Space1"></div>
                {/* <Button onClick={() => window.location.replace("/#section1")} variant="outlined">
                {/* Upload
                </Button> &nbsp; &nbsp;
                <Button onClick={() => window.location.replace("/#section2")} variant="outlined">
                Organize
                </Button> &nbsp; &nbsp;
                <Button onClick={() => window.location.replace("/#section3")} variant="outlined">
                Annotate
                </Button> &nbsp; &nbsp;
                <Button onClick={() => window.location.replace("/#section4")} variant="outlined">
                Train
                </Button> &nbsp; &nbsp;
                <Button onClick={() => window.location.replace("/#section5")} variant="outlined">
                Deploy
                </Button> */}
            </div>
            <div className="BackgroundLower">
                <br/>
                <br/>
                <br/>
                <div className="FindMore">
                    <a>Find out more</a>
                    <br/>
                    &darr;
                </div>
                <div className="Space2"></div>
                <div className="StoryCollection">
                    <div className="Story">
                        <br/><br/>
                        <h3>We help innovators like you apply computer vision.</h3>
                        <a>Read more about customer stories in our documentation.</a>
                        <br/><br/>
                        <img className="testimg" src={imagetest} />
                    </div>
                    <div className="Story" id={'section1'}>
                        <br/><br/>
                        <h3>Upload training data directly from the source.</h3>
                        <a>Upload files manually or via API including images, annotations, and videos. We support dozens of annotation formats and make it easy to continuously add new training data as you collect it.</a>
                        <br/><br/>
                        <img className="testimg" src={imagetest} />
                    </div>
                    <div className="Story" id={'section2'}>
                        <br/><br/>
                        <h3>Organize and conduct experiments all in one centralized place.</h3>
                        <a>Assess the quality of your datasets and prepare them for training. Experiment with transformation tools to generate new training data and see what configurations lead to improved model performance.</a>
                        <br/><br/>
                        <img className="testimg" src={imagetest} />
                    </div>
                    <div className="Story" id={'section3'}>
                        <br/><br/>
                        <h3>Annotate images super fast, right within your browser.</h3>
                        <a>Label using any operating system without downloading any software. Use the most popular annotation formats including JSON, XML, CSV, and TXT. You and your team can annotate hundreds of images in mere minutes.</a>
                        <br/><br/>
                        <img className="testimg" src={imagetest} />
                    </div>
                    <div className="Story" id={'section4'}>
                        <br/><br/>
                        <h3>Host a trained model with a single click... Or build your own custom models.</h3>
                        <a>Deploy your model to the cloud, the edge, or the browser. Get predictions where you need them and in half the time.</a>
                        <br/><br/>
                        <img className="testimg" src={imagetest} />
                    </div>
                    <div className="Story" id={'section5'}>
                        <br/><br/>
                        <h3>It's time to invest in your long-term computer vision strategy.</h3>
                        <a>Even the best trained models slowly start to degrade over time. Roboflow provides a streamlined workflow for identifying edge cases and deploying fixes. With each iteration, your models become smarter and more accurate.</a>
                        <br/><br/>
                        <img className="testimg" src={imagetest} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;