import React from "react";

import imgUpload from '..//..//assets//images/mystatic/Upload.svg'
import imgOrganize from '..//..//assets//images/mystatic/Organize.svg'
import imgAnnotate from '..//..//assets//images/mystatic/Annotate.svg'
import imgTrain from '..//..//assets//images/mystatic/Train.svg'
import imgDeploy from '..//..//assets//images/mystatic/Deploy.svg'

import imgDrone from '..//..//assets//images/mystatic/drone.jpg'
import imgField1 from '..//..//assets//images/mystatic/field6.jpeg'
import imgField2 from '..//..//assets//images/mystatic/field2.jpg'
import imgField3 from '..//..//assets//images/mystatic/field3.jpg'
import imgField4 from '..//..//assets//images/mystatic/field4.jpg'
import imgField5 from '..//..//assets//images/mystatic/field5.jpg'

import home_annot from "..//..//assets//images/mystatic/home_annot.png"
import home_annot2 from "..//..//assets//images/mystatic/home_annot2.png"
import home_annot3 from "..//..//assets//images/mystatic/home_annot3.png"
import brand from "..//..//assets/images/hero/brand.svg";


function Home() {
    return (
        <div>
            {/* <!-- ====== Hero Start ====== --> */}
            <section className="ud-hero" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
                            <h1 className="ud-hero-title">
                            Use our vision tools to release your data's full potential
                            </h1>
                            <p className="ud-hero-desc">
                            With a few images, you can train a working <br/> computer vision model in less than a day.
                            </p>
                            <ul className="ud-hero-buttons">
                                <li>
                                <a href="/Upload" rel="nofollow noopener" target="_blank" className="ud-main-btn ud-white-btn">
                                    Try It Now
                                </a>
                                </li>
                                <li>
                                <a href="/About" rel="nofollow noopener" target="_blank" className="ud-main-btn ud-link-btn">
                                    Learn More <i className="lni lni-arrow-right"></i>
                                </a>
                                </li>
                            </ul>
                            </div>

                            <br/>
                            <br/>

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

                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <div className="ud-hero-brands-wrapper wow fadeInUp" data-wow-delay=".3s">
                                <img src={brand} alt="brand" />
                            </div>
                            
                            <br/>
                            <br/>
                            <br/>

                            <div className="myParallelImages">
                            <img src={home_annot} alt="hero-image" style={{borderRadius: '10px'}}/>
                            <img src={home_annot2} alt="hero-image" style={{borderRadius: '10px'}}/>
                            <img src={home_annot3} alt="hero-image" style={{borderRadius: '10px'}}/>
                            </div>
                            
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            {/* <img
                                src={dottedshape}
                                alt="shape"
                                className="shape shape-1"
                            />
                            <img
                                src={dottedshape}
                                alt="shape"
                                className="shape shape-2"
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Hero End ====== --> */}

            {/* <!-- ====== Features Start ====== --> */}
            <section id="features" className="ud-features">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="ud-section-title">
                    <span>Features</span>
                    <h2>Main Features of Play</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form.
                    </p>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
                    <div className="ud-feature-icon">
                        <i className="lni lni-gift"></i>
                    </div>
                    <div className="ud-feature-content">
                        <h3 className="ud-feature-title">Upload</h3>
                        <p className="ud-feature-desc">
                        Lorem Ipsum is simply dummy text of the printing and industry.
                        </p>
                        <a href="" className="ud-feature-link">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
                    <div className="ud-feature-icon">
                        <i className="lni lni-move"></i>
                    </div>
                    <div className="ud-feature-content">
                        <h3 className="ud-feature-title">Organize</h3>
                        <p className="ud-feature-desc">
                        Lorem Ipsum is simply dummy text of the printing and industry.
                        </p>
                        <a href="" className="ud-feature-link">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
                    <div className="ud-feature-icon">
                        <i className="lni lni-layout"></i>
                    </div>
                    <div className="ud-feature-content">
                        <h3 className="ud-feature-title">Annotate</h3>
                        <p className="ud-feature-desc">
                        Lorem Ipsum is simply dummy text of the printing and industry.
                        </p>
                        <a href="" className="ud-feature-link">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
                    <div className="ud-feature-icon">
                        <i className="lni lni-layers"></i>
                    </div>
                    <div className="ud-feature-content">
                        <h3 className="ud-feature-title">Train</h3>
                        <p className="ud-feature-desc">
                        Lorem Ipsum is simply dummy text of the printing and industry.
                        </p>
                        <a href="" className="ud-feature-link">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== Features End ====== --> */}

            <div className="BackgroundFlow">
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="w-layout-grid sidebyside">
                        <div className="sidebyside__text">
                            <h4 className="myh4">We help innovators like you apply computer vision.</h4>
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
                            <h4 className="myh4">Upload training data directly from the source.</h4>
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
                            <h4 className="myh4">Organize and conduct experiments all in one centralized place.</h4>
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
                            <h4 className="myh4">Annotate images super fast, right within your browser.</h4>
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
                            <h4 className="myh4">Host a trained model with a single click... Or build your own custom models.</h4>
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
                            <h4 className="myh4">It's time to invest in your long-term computer vision strategy.</h4>
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
        </div>
    );
}

export default Home;