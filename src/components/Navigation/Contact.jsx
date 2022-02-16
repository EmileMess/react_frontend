import React from "react";


function Contact() {
    return (
        <div>
            {/* <!-- ====== Banner Start ====== --> */}
            <section class="ud-page-banner">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-banner-content">
                        <h1>Contact</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Banner End ====== --> */}

            {/* <!-- ====== Contact Start ====== --> */}
            <section id="contact" class="ud-contact">
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-xl-8 col-lg-7">
                        <div class="ud-contact-content-wrapper">
                        <div class="ud-contact-title">
                            <span>CONTACT US</span>
                            <h2>
                            Let’s talk about your data!
                            </h2>
                        </div>
                        <div class="ud-contact-info-wrapper">
                            <div class="ud-single-info">
                            <div class="ud-info-icon">
                                <i class="lni lni-map-marker"></i>
                            </div>
                            <div class="ud-info-meta">
                                <h5>Our Location</h5>
                                <p>AIGUI GmbH <br/> Nymphenburgerstraße 107 <br/> 80636 Munich</p>
                            </div>
                            </div>
                            <div class="ud-single-info">
                            <div class="ud-info-icon">
                                <i class="lni lni-envelope"></i>
                            </div>
                            <div class="ud-info-meta">
                                <h5>How Can We Help?</h5>
                                <p>info@aigui.com</p>
                                <p>contact@aigui.com</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div
                        class="ud-contact-form-wrapper wow fadeInUp"
                        data-wow-delay=".2s"
                        >
                        <h3 class="ud-contact-form-title">Send us a Message</h3>
                        <form class="ud-contact-form">
                            <div class="ud-form-group">
                            <label for="fullName">Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Max Mustermann"
                            />
                            </div>
                            <div class="ud-form-group">
                            <label for="email">Email*</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@yourmail.com"
                            />
                            </div>
                            <div class="ud-form-group">
                            <label for="phone">Phone*</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="+49 173 123456"
                            />
                            </div>
                            <div class="ud-form-group">
                            <label for="message">Message*</label>
                            <textarea
                                name="message"
                                rows="1"
                                placeholder="Type your message here"
                            ></textarea>
                            </div>
                            <div class="ud-form-group mb-0">
                            <button type="submit" class="ud-main-btn">
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