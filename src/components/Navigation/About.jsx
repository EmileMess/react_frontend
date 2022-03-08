import React from "react";

import Logo from "..//..//assets/images/logo/logo.svg";
import aboutimage from "..//..//assets/images/about/about-image.svg";

function About() {
    return (
        <div>
            {/* <!-- ====== Banner Start ====== --> */}
            <section className="ud-page-banner">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="ud-banner-content">
                    <h1>About</h1>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== Banner End ====== --> */}

            {/* <!-- ====== About Start ====== --> */}
            <section id="about" className="ud-about">
            <div className="container">
                <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
                    <div className="ud-about-content-wrapper">
                        <div className="ud-about-content">
                        <span className="tag">About Us</span>
                        <h2>Brilliant Toolkit to Build Nextgen Website Faster.</h2>
                        <p>
                            The main ‘thrust’ is to focus on educating attendees on how to
                            best protect highly vulnerable business applications with
                            interactive panel discussions and roundtables led by subject
                            matter experts.
                        </p>

                        <p>
                            The main ‘thrust’ is to focus on educating attendees on how to
                            best protect highly vulnerable business applications with
                            interactive panel.
                        </p>
                        <a href="" className="ud-main-btn">Learn More</a>
                        </div>
                    </div>
                    <div className="ud-about-image">
                        <img src={aboutimage} alt="about-image" />
                    </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== About End ====== --> */}

            <div className="myParallelImages wow fadeInUp" data-wow-delay=".4s">
                <img src={'https://backenddjangostorage.blob.core.windows.net/static/home_annot.png'} alt="hero-image" style={{width: '500px', height: '500px', borderRadius: '10px'}}/>
                <img src={'https://backenddjangostorage.blob.core.windows.net/static/home_annot2.png'} alt="hero-image" style={{width: '500px', height: '500px', borderRadius: '10px'}}/>
                <img src={'https://backenddjangostorage.blob.core.windows.net/static/home_annot3.png'} alt="hero-image" style={{width: '500px', height: '500px', borderRadius: '10px'}}/>
            </div>
        </div>
    );
}

export default About;