import React from "react";

function Handle404() {
    return (
        <div>
            {/* <!-- ====== Banner Start ====== --> */}
            <section className="ud-page-banner">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="ud-banner-content">
                    <h1>404 - Page not found</h1>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== Banner End ====== --> */}

            {/* <!-- ====== Error 404 Start ====== --> */}
            <section class="ud-404">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <div class="ud-404-wrapper">
                    <div class="ud-404-content">
                        <h2 class="ud-404-title">We couldn't find that page.</h2>
                        <h5 class="ud-404-subtitle">
                        Maybe you can find what you need here?
                        </h5>
                        <ul class="ud-404-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Contact">Support</a>
                        </li>
                        <li>
                            <a href="About">Information</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== Error 404 End ====== --> */}
        </div>
    );
}

export default Handle404;