import React, { Component } from "react";
import Button from '@material-ui/core/Button';

/* Upload */

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            isSelected: false
        }
    }

    changeHandler = event => {
        this.setState({ selectedFiles: event.target.files })
        this.setState({ isSelected: true })
    };

    onFileUpload = event => {
        if (this.state.isSelected == true) {
            var formData = new FormData();
            for (const key of Object.keys(this.state.selectedFiles)) {
                formData.append('imgCollection', this.state.selectedFiles[key])
            }
            // axios.post("http://localhost:4000/api/upload-images", formData, {
            // }).then(res => {
            //     console.log(res.data)
            // })
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