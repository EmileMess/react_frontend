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
                            Let’s talk about your data!
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
        </div>
    );
}

export default Contact;