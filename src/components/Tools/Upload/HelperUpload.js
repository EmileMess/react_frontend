import React, { Component } from "react";

import Button from '@material-ui/core/Button';
// import { Button } from "react-bootstrap";
import axios from 'axios';


class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            isSelected: false,
            datasetName: 'dataset_01',
        }
    }

    changeHandler = e => {
        this.setState({ selectedFiles: e.target.files });
        this.setState({ isSelected: true });
    };

    onFileUpload = (e) => {
        if (this.state.isSelected == true) {
            e.preventDefault();
            console.log(this.state);
            let form_data = new FormData();
            for (var i = 0; i < this.state.selectedFiles.length; i++) {
                form_data.append('images', this.state.selectedFiles[i]);
            }
            let url = 'https://aigui-backend.azurewebsites.net/api/posts/';
            axios.post(url, form_data, {
                withCredentials: true,
                credentials: 'include',
                headers: {"Access-Control-Allow-Origin": "*", 'content-type': 'multipart/form-data'}
                })
                .then(res => {
                console.log(res.data);
                })
                .catch(err => console.log(err))
                }
    };

    render() {
        return (
            <div >
                <label htmlFor="upload-photo">
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={this.changeHandler}
                    />
                    <Button color="primary" variant="contained" component="span">
                        Choose files
                    </Button>
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
                <Button onClick={this.onFileUpload} variant="contained" color="secondary" component="span">
                    Upload
                </Button>
            </div >
        );
    }
}

export default Upload;