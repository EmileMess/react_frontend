import React, { Component, useEffect, useState } from "react";
import ChooseDataset from "../ChooseDataset";
import axios from 'axios';


function StateOrganize(props) {
  const [hasDatasetUploaded, setHasDatasetUploaded] = useState(true)
  const [imageModels, setImageModels] = useState([])
  const url = 'https://aigui-backend.azurewebsites.net/api/getImages/';
  const url2 = 'https://aigui-backend.azurewebsites.net/api/runAugmentation/';

  // Redirect to Login if not signed in
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('/Signin');
    }
  }, []);

  const handleError = (err) => {
    console.log(err)
    if (err.response.status == 409) {
        this.setState({hasDatasetUploaded: false})
    }
  };

  const updateDatasetsDisplay = (name) => {
    // Get dataset images
    axios.get(url, {
      params: {datasetname: name, user: localStorage.getItem('user')},
      withCredentials: true,
      headers: {'content-type': 'multipart/form-data'}
      })
      .then(res => {
          console.log("GET: ", res.data);
          setHasDatasetUploaded(true);
          setImageModels(res.data)
      })
      .catch(err => handleError(err))

    // Augmentation
    axios.get(url2, {
      params: {datasetname: name, user: localStorage.getItem('user')},
      withCredentials: true,
      headers: {'content-type': 'multipart/form-data'}
      })
      .then(res => {
          console.log("GET: ", res.data);
      })
      .catch(err => handleError(err))
  };

  const handleDownloadClick = (e) => {
    for(const img of imageModels) {
      console.log("LOLO")
      // fetch(img['image'])
      // .then(resp => resp.blob())
      // .then(blob => {
      //   const url = window.URL.createObjectURL(blob);
      //   const a = document.createElement('a');
      //   a.style.display = 'none';
      //   a.href = url;
      //   // the filename you want
      //   a.download = 'title';
      //   document.body.appendChild(a);
      //   a.click();
      //   window.URL.revokeObjectURL(url);
      // })
      // .catch(() => alert('oh no!'));
    }
  }

  return (
    <div className="myCenter">
        {/* <!-- ====== Banner Start ====== --> */}
        <section className="ud-page-banner">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="ud-banner-content">
                    <h1>Organize</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== Banner End ====== --> */}

        {hasDatasetUploaded === true &&
        <div>
          <ChooseDataset updateimages={updateDatasetsDisplay}/>
          <button onClick={handleDownloadClick}>Download Dataset</button>
        </div>}
    </div>
  );
}

export default StateOrganize;