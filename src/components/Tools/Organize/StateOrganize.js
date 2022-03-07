import React, { Component, useEffect } from "react";


function StateOrganize() {

  // Redirect to Login if not signed in
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('/Signin');
    }
  }, []);

  return (
    <div className="App">
        {/* <!-- ====== Banner Start ====== --> */}
        <section class="ud-page-banner">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <div class="ud-banner-content">
                    <h1>Organize</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== Banner End ====== --> */}
    </div>
  );
}

export default StateOrganize;