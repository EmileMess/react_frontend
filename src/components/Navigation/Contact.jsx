import React from "react";


function Contact() {
    return (
        <div>
            {/* <!-- ====== Banner Start ====== --> */}
            <section className="ud-page-banner">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="ud-banner-content">
                        <h1>Contact</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Banner End ====== --> */}

            {/* <!-- ====== Contact Start ====== --> */}
            <section id="contact" className="ud-contact">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="ud-contact-content-wrapper">
                        <div className="ud-contact-title">
                            <span>CONTACT US</span>
                            <h2>
                            Let’s talk about your data.
                            </h2>
                        </div>
                        <div className="ud-contact-info-wrapper">
                            <div className="ud-single-info">
                            <div className="ud-info-icon">
                                <i className="lni lni-map-marker"></i>
                            </div>
                            <div className="ud-info-meta">
                                <h5>Our Location</h5>
                                <p>AIGUI GmbH <br/> Nymphenburgerstraße 107 <br/> 80636 Munich</p>
                            </div>
                            </div>
                            <div className="ud-single-info">
                            <div className="ud-info-icon">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="ud-info-meta">
                                <h5>How Can We Help?</h5>
                                <p>info@aigui.com</p>
                                <p>contact@aigui.com</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div
                        className="ud-contact-form-wrapper wow fadeInUp"
                        data-wow-delay=".2s"
                        >
                        <h3 className="ud-contact-form-title">Send us a Message</h3>
                        <form className="ud-contact-form">
                            <div className="ud-form-group">
                            <label htmlFor="fullName">Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Max Mustermann"
                            />
                            </div>
                            <div className="ud-form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@yourmail.com"
                            />
                            </div>
                            <div className="ud-form-group">
                            <label htmlFor="phone">Phone*</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="+49 173 123456"
                            />
                            </div>
                            <div className="ud-form-group">
                            <label htmlFor="message">Message*</label>
                            <textarea
                                name="message"
                                rows="1"
                                placeholder="Type your message here"
                            ></textarea>
                            </div>
                            <div className="ud-form-group mb-0">
                            <button type="submit" className="ud-main-btn">
                                Send Message
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Contact End ====== --> */}

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
                        <img src="https://backenddjangostorage.blob.core.windows.net/static/team-01.png" alt="team" />
                        </div>

                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Andreas Anders</h5>
                        <h6>UI Designer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
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
                        <img src="https://backenddjangostorage.blob.core.windows.net/static/team-01.png" alt="team" />
                        </div>

                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Andreas Anders</h5>
                        <h6>Product Designer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
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
                        <img src="https://backenddjangostorage.blob.core.windows.net/static/team-01.png" alt="team" />
                        </div>

                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Andreas Anders</h5>
                        <h6>App Developer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
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
                        <img src="https://backenddjangostorage.blob.core.windows.net/static/team-01.png" alt="team" />
                        </div>

                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/dotted-shape.svg"
                        alt="shape"
                        className="shape shape-1"
                        />
                        <img
                        src="https://backenddjangostorage.blob.core.windows.net/static/shape-2.svg"
                        alt="shape"
                        className="shape shape-2"
                        />
                    </div>
                    <div className="ud-team-info">
                        <h5>Andreas Anders</h5>
                        <h6>Content Writer</h6>
                    </div>
                    <ul className="ud-team-socials">
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-facebook-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
                            <i className="lni lni-twitter-filled"></i>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com">
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

export default Contact;