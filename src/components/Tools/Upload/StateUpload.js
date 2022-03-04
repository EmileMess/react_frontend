import React, { useState, useEffect, Fragment } from 'react';

import Upload from './HelperUpload.js';


function StateUpload() {

  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('/Signup');
    } else {
      fetch('https://aigui-backend.azurewebsites.net/users/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="App">
      {loading === false && (
        <div>
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
      )}
    </div>
  );
}

export default StateUpload;