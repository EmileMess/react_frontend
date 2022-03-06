import React, { Component } from "react";
import axios from 'axios';


class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.url = 'https://aigui-backend.azurewebsites.net/api/posts/';

        this.state = {
            selectedFiles: null,
            isSelected: false,
            loadedDatasets: [],
            datasetName: '',
            correct_dataset_structure: true, // database name not rule conform
            correct_dataset_usage: true, // database name already used
            reminderIsSelected: false, // warning for no images are selected
        }

        this.updateDatasetsDisplay();
    }

    updateDatasetsDisplay () {
        axios.get(this.url, {
            withCredentials: true,
            headers: {'content-type': 'multipart/form-data'}
            })
            .then(res => {
            this.setState({loadedDatasets: []});
            for (const dataset of res.data) {
                this.setState(previousState => ({loadedDatasets: [...previousState.loadedDatasets, dataset["name"]]}));
            }
            console.log("GET: ", res.data);
            })
            .catch(err => console.log(err))
    }

    finishUpload () {
        this.updateDatasetsDisplay();
        this.setState({successUploadedDataset: true});
    }

    changeHandler = e => {
        this.setState({ selectedFiles: e.target.files });
        this.setState({ isSelected: true });
    };

    handleError (err) {
        console.log(err)
        console.log(err.response.status)
        if (err.response.status == 403) {
            this.setState({correct_dataset_usage: false})
        }
    }

    onFileUpload = (e) => {
        // Make sure user input is correct

        this.setState({correct_dataset_structure: true})
        this.setState({correct_dataset_usage: true})
        this.setState({successUploadedDataset: false})
        this.setState({reminderIsSelected: false})

        if (this.state.datasetName == "" || this.state.datasetName.includes(" ")) {
            this.setState({correct_dataset_structure: false});
            return
        }
        if (this.state.isSelected == false) {
            this.setState({reminderIsSelected: true});
            return
        }

        // POST / GET

        if (this.state.isSelected == true) {
            e.preventDefault();
            let form_data = new FormData();
            for (var i = 0; i < this.state.selectedFiles.length; i++) {
                form_data.append('images', this.state.selectedFiles[i]);
            }
            form_data.append('user', localStorage.getItem('user'));
            form_data.append('datasetname', this.state.datasetName);

            axios.post(this.url, form_data, {
                withCredentials: true,
                headers: {'content-type': 'multipart/form-data'}
                })
                .then(res => {this.finishUpload()})
                .catch(err => this.handleError(err))
            }
    };

    render() {
        return (
            <div className="myCenter">
                <label>
                    {this.state.loadedDatasets}
                </label>

                <br/>
                <br/>
                <br/>
                <br/>

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
                    Dataset name:&nbsp;<input onChange={ (e) => this.setState({ datasetName: e.target.value }) } type="text" defaultValue={""}/>
                    </label>
                </form>

                <br />

                {this.state.correct_dataset_structure === false && <div className='myWarning'> <a>Dataset name can not be empty or contain spaces</a> <br/> <br/> <br/> </div>}
                {this.state.correct_dataset_usage === false && <div className='myWarning'> <a>Dataset name already used</a> <br/> <br/> <br/> </div>}
                {this.state.successUploadedDataset === true && <div className='myWarningGreen'> <a>Successfully uploaded Dataset</a> <br/> <br/> <br/> </div>}
                {this.state.reminderIsSelected === true && <div className='myWarning'> <a>No data files selected</a> <br/> <br/> <br/> </div>}
                <br />
                <button onClick={this.onFileUpload} variant="contained" color="secondary" component="span">
                    Upload
                </button>
            </div >
        );
    }
}

export default Upload;