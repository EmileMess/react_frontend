import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import axios from 'axios';

/* Upload */

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            selectedFileNames: null,
            isSelected: false
        }
    }

    changeHandler = event => {
        this.setState({ selectedFiles: event.target.files });
        this.fileNames = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.fileNames.push(event.target.files[i].name)
        };
        this.setState({ selectedFileNames: this.fileNames });
        this.setState({ isSelected: true });
    };

    onFileUpload = (e) => {
        if (this.state.isSelected == true) {
            e.preventDefault();
            console.log(this.state);
            let form_data = new FormData();
            form_data.append('image', this.state.selectedFiles, this.state.selectedFileNames);
            let url = 'http://localhost:8000/api/posts/';
            axios.post(url, form_data, {
                headers: {'content-type': 'multipart/form-data'} // TODO correct content type
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
                <Button onClick={this.onFileUpload} variant="contained" color="secondary" component="span">
                    Upload
                </Button>
            </div >
        );
    }
}

export default Upload;