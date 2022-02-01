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
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={this.changeHandler}
                />
                <br />
                <br />
                {this.state.isSelected ? (
                    <div>
                        Press Upload to continue with {this.state.selectedFiles.length} images
                    </div>
                ) : (
                    <p>Select images to upload</p>
                )}
                <br />
                <br />
                <Button onClick={this.onFileUpload} variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </div >
        );
    }
}

export default Upload;