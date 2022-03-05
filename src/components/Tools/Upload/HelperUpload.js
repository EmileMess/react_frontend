import React, { Component } from "react";
import axios from 'axios';


class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            isSelected: false,
            datasetName: 'dataset_01',
            // imgurl: '',
        }
    }

    changeHandler = e => {
        this.setState({ selectedFiles: e.target.files });
        this.setState({ isSelected: true });
    };

    onFileUpload = (e) => {
        if (this.state.isSelected == true) {
            e.preventDefault();
            console.log("Uploading...");
            let form_data = new FormData();
            for (var i = 0; i < this.state.selectedFiles.length; i++) {
                form_data.append('images', this.state.selectedFiles[i]);
            }
            let url = 'https://aigui-backend.azurewebsites.net/api/posts/';
            axios.post(url, form_data, {
                withCredentials: true,
                headers: {'content-type': 'multipart/form-data'}
                })
                .then(res => {
                console.log("POST: ", res.data);
                })
                .catch(err => console.log(err))
            axios.get(url, {
                withCredentials: true,
                headers: {'content-type': 'multipart/form-data'}
                })
                .then(res => {
                // this.setState({ imgurl: res.data[res.data.length - 1]['images'] });
                console.log("GET: ", res.data);
                })
                .catch(err => console.log(err))
                }
    };

    render() {
        return (
            <div className="myCenter">
                <label htmlFor="upload-photo">
                    <input
                        // style={{ display: 'none' }}
                        id="upload-photo"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={this.changeHandler}
                    />
                </label>

                <br />
                <br />
                {this.state.isSelected ? (
                    <p>Selected {this.state.selectedFiles.length} images</p>
                ) : (
                    <p>No files selected</p>
                )}
                <br />
                <br />
                <form>
                    <label>
                    Dataset name:&nbsp;<input onChange={ (e) => this.setState({ datasetName: e.target.value }) } type="text" defaultValue={"dataset_01"}/>
                    </label>
                </form>
                <br />
                <br />
                <button onClick={this.onFileUpload} variant="contained" color="secondary" component="span">
                    Upload
                </button>

                {/* <img
                src={this.state.imgurl}
                alt="new"
                /> */}
            </div >
        );
    }
}

export default Upload;