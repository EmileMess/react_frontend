import React, { Component } from "react";

import Upload from './HelperUpload.js';


function StateUpload() {
  return (
    <div className="App">
        {/* <!-- ====== Banner Start ====== --> */}
        <section class="ud-page-banner">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <div class="ud-banner-content">
                    <h1>Upload</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== Banner End ====== --> */}

        <br/>
        <br/>
        <br/>
        <Upload />
        <br/>
        <br/>
        <br/>
    </div>
  );
}

export default StateUpload;