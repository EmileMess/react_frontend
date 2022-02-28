import React from "react";

import Logo from "..//..//assets/images/logo/logo.svg";
import shape1 from "..//..//assets/images/footer/shape-1.svg";
import shape2 from "..//..//assets/images/footer/shape-2.svg"
import shape3 from "..//..//assets/images/footer/shape-3.svg"

import ayroui from "..//..//assets/images/footer/brands/ayroui.svg"
import ecommercehtml from "..//..//assets/images/footer/brands/ecommerce-html.svg"
import greygrids from "..//..//assets/images/footer/brands/graygrids.svg"
import lineicons from "..//..//assets/images/footer/brands/lineicons.svg"
import uideck from "..//..//assets/images/footer/brands/uideck.svg"
import tailwindtemplates from "..//..//assets/images/footer/brands/tailwindtemplates.svg"

function Footer() {
    return (
        <div>
            {/* <!-- ====== Footer Start ====== --> */}
            <footer class="ud-footer wow fadeInUp" data-wow-delay=".15s">
                <div class="shape shape-1">
                    <img src={shape1} alt="shape" />
                </div>
                <div class="shape shape-2">
                    <img src={shape2} alt="shape" />
                </div>
                <div class="shape shape-3">
                    <img src={shape3} alt="shape" />
                </div>
                <div class="ud-footer-widgets">
                    <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="ud-widget">
                            <a href="index.html" class="ud-footer-logo">
                            <img src={Logo} alt="logo" />
                            </a>
                            <p class="ud-widget-desc">
                            We find the value in your data by using the latest AI technologies.
                            </p>
                            <ul class="ud-widget-socials">
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-facebook-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-twitter-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-instagram-filled"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/MusharofChy">
                                <i class="lni lni-linkedin-original"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div class="ud-widget">
                            <h5 class="ud-widget-title">About Us</h5>
                            <ul class="ud-widget-links">
                            <li>
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Features</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">About</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Testimonial</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div class="ud-widget">
                            <h5 class="ud-widget-title">Features</h5>
                            <ul class="ud-widget-links">
                            <li>
                                <a href="javascript:void(0)">How it works</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Privacy policy</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Refund policy</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div class="ud-widget">
                            <h5 class="ud-widget-title">Our Products</h5>
                            <ul class="ud-widget-links">
                            <li>
                                <a
                                href="https://lineicons.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Lineicons
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://ecommercehtml.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Ecommerce HTML</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://ayroui.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Ayro UI</a
                                >
                            </li>
                            <li>
                                <a
                                href="https://graygrids.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >Plain Admin</a
                                >
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                        <div class="ud-widget">
                            <h5 class="ud-widget-title">Partners</h5>
                            <ul class="ud-widget-brands">
                            <li>
                                <a
                                href="https://ayroui.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src={ayroui}
                                    alt="ayroui"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://ecommercehtml.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src={ecommercehtml}
                                    alt="ecommerce-html"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://graygrids.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src={greygrids}
                                    alt="graygrids"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://lineicons.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src={lineicons}
                                    alt="lineicons"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://uideck.com/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src={uideck}
                                    alt="uideck"
                                />
                                </a>
                            </li>
                            <li>
                                <a
                                href="https://tailwindtemplates.co/"
                                rel="nofollow noopner"
                                target="_blank"
                                >
                                <img
                                    src={tailwindtemplates}
                                    alt="tailwindtemplates"
                                />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="ud-footer-bottom">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                        <ul class="ud-footer-bottom-left">
                            <li>
                            <a href="">Privacy policy</a>
                            </li>
                            <li>
                            <a href="">Support policy</a>
                            </li>
                            <li>
                            <a href="">Terms of service</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-md-4">
                        <p class="ud-footer-bottom-right">
                            &copy; AIGUI 2022
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
            {/* <!-- ====== Footer End ====== --> */}
            
            {/* <!-- ====== Back To Top Start ====== --> */}
            {/* <a href="javascript:void(0)" class="back-to-top">
            <i class="lni lni-chevron-up"> </i>
            </a> */}
            {/* <!-- ====== Back To Top End ====== --> */}
        </div>
    );
}

export default Footer;