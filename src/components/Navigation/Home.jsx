import '..//..//App.css';
import React from "react";

import imgUpload from '..//..//images/static/Upload.svg'
import imgOrganize from '..//..//images/static/Organize.svg'
import imgAnnotate from '..//..//images/static/Annotate.svg'
import imgTrain from '..//..//images/static/Train.svg'
import imgDeploy from '..//..//images/static/Deploy.svg'

import imgDrone from '..//..//images/static/drone.jpg'
import imgField1 from '..//..//images/static/field6.jpeg'
import imgField2 from '..//..//images/static/field2.jpg'
import imgField3 from '..//..//images/static/field3.jpg'
import imgField4 from '..//..//images/static/field4.jpg'
import imgField5 from '..//..//images/static/field5.jpg'


function Home() {
    return (
        <div className="BackgroundFlow">
            {/* CONTENT */}
            {/* UPPER PART */}

            <div className="BackgroundUpper">
                <div className="TitleBlock">
                    <h1>Release your data's full potential</h1>
                    <h2>With a few images, you can train a working computer vision model in less than a day.</h2>
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
            </div>

            {/* LOWER PART */}

            <div className="BackgroundLower">
                <br/>
                <br/>
                <br/>
                <div className="FindMore">
                    <a>Find out more</a>
                    <br/>
                    &darr;
                </div>

                <div className="w-layout-grid sidebyside">
                    <div className="sidebyside__text">
                        <h4>We help innovators like you apply computer vision.</h4>
                        <div className="subtext">
                            Read more about customer stories in our documentation.
                        </div>
                    </div>
                    <img className="sidebyside__image" alt="image" src={imgDrone}/>
                </div>

                <br/>
                <br/>
                <br/>

                <div className="w-layout-grid sidebyside" id={'section1'}>
                    <img className="sidebyside__image" alt="image" src={imgField1}/>
                    <div className="sidebyside__text">
                        <h4>Upload training data directly from the source.</h4>
                        <div className="subtext">
                            Upload files manually or via API including images, annotations, and videos. We support dozens of annotation formats and make it easy to continuously add new training data as you collect it.
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <div className="w-layout-grid sidebyside" id={'section2'}>
                    <div className="sidebyside__text">
                        <h4>Organize and conduct experiments all in one centralized place.</h4>
                        <div className="subtext">
                            Assess the quality of your datasets and prepare them for training. Experiment with transformation tools to generate new training data and see what configurations lead to improved model performance.
                        </div>
                    </div>
                    <img className="sidebyside__image" alt="image" src={imgField2}/>
                </div>

                <br/>
                <br/>
                <br/>

                <div className="w-layout-grid sidebyside" id={'section3'}>
                    <img className="sidebyside__image" alt="image" src={imgField3}/>
                    <div className="sidebyside__text">
                        <h4>Annotate images super fast, right within your browser.</h4>
                        <div className="subtext">
                            Label using any operating system without downloading any software. Use the most popular annotation formats including JSON, XML, CSV, and TXT. You and your team can annotate hundreds of images in mere minutes.
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <div className="w-layout-grid sidebyside" id={'section4'}>
                    <div className="sidebyside__text">
                        <h4>Host a trained model with a single click... Or build your own custom models.</h4>
                        <div className="subtext">
                            Deploy your model to the cloud, the edge, or the browser. Get predictions where you need them and in half the time.
                        </div>
                    </div>
                    <img className="sidebyside__image" alt="image" src={imgField4}/>
                </div>

                <br/>
                <br/>
                <br/>

                <div className="w-layout-grid sidebyside" id={'section5'}>
                    <img className="sidebyside__image" alt="image" src={imgField5}/>
                    <div className="sidebyside__text">
                        <h4>It's time to invest in your long-term computer vision strategy.</h4>
                        <div className="subtext">
                            Even the best trained models slowly start to degrade over time. Roboflow provides a streamlined workflow for identifying edge cases and deploying fixes. With each iteration, your models become smarter and more accurate.
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default Home;