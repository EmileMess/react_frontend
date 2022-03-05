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

            {/* <!-- ====== Team Start ====== --> */}
            <section id="team" className="ud-team">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="ud-section-title mx-auto text-center">
                    <span>Our Team</span>
                    <h2>Meet The Team</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form.
                    </p>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-team wow fadeInUp" data-wow-delay=".1s">
                    <div className="ud-team-image-wrapper">
                        <div className="ud-team-image">
                        <img src="assets/images/team/team-01.png" alt="team" />
                        </div>

                        <img
                        src="assets/images/team/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="assets/images/team/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Adveen Desuza</h5>
                        <h6>UI Designer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-instagram-filled"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-team wow fadeInUp" data-wow-delay=".15s">
                    <div className="ud-team-image-wrapper">
                        <div className="ud-team-image">
                        <img src="assets/images/team/team-02.png" alt="team" />
                        </div>

                        <img
                        src="assets/images/team/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="assets/images/team/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Jezmin uniya</h5>
                        <h6>Product Designer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-instagram-filled"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-team wow fadeInUp" data-wow-delay=".2s">
                    <div className="ud-team-image-wrapper">
                        <div className="ud-team-image">
                        <img src="assets/images/team/team-03.png" alt="team" />
                        </div>

                        <img
                        src="assets/images/team/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="assets/images/team/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Andrieo Gloree</h5>
                        <h6>App Developer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-instagram-filled"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className="ud-single-team wow fadeInUp" data-wow-delay=".25s">
                    <div className="ud-team-image-wrapper">
                        <div className="ud-team-image">
                        <img src="assets/images/team/team-04.png" alt="team" />
                        </div>

                        <img
                        src="assets/images/team/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="assets/images/team/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Jackie Sanders</h5>
                        <h6>Content Writer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/MusharofChy">
                            <i className="lni lni-instagram-filled"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== Team End ====== --> */}

        </div>
    );
}

export default About;