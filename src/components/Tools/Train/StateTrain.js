import React, { Component } from "react";
import Parameters from './Parameters.js';


function StateTrain() {
  return (
    <div className="App">
        {/* <!-- ====== Banner Start ====== --> */}
        <section class="ud-page-banner">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <div class="ud-banner-content">
                    <h1>Train</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== Banner End ====== --> */}
        <Parameters />
    </div>
  );
}

export default StateTrain;