import React from "react";
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

// ASSUMES USER IS LOGGED IN AND DATASET IS AVAILABLE

class ChooseDataset extends React.Component {
    constructor(props) {
        super(props);
        this.url = 'https://aigui-backend.azurewebsites.net/api/uploadDataset/';
        this.state = {
            datasets: [],
            chosenDataset: '',
            datasetFilled: false,
        }

        this.getDatasets()
    }

    // GET
    getDatasets () {
        axios.get(this.url, {
            params: {user: localStorage.getItem('user')},
            withCredentials: true,
            headers: {'content-type': 'multipart/form-data'}
            })
            .then(res => {
                console.log("GET: ", res.data);
                this.setState({datasets: res.data});
                this.setState({datasetFilled: true})
                this.setState({chosenDataset: res.data[0]['name']})
                this.props.updateimages(res.data[0]['name']);
            })
            .catch(err => console.log(err))
    }

    handleChooseDataset (e) {
        for(const data of this.state.datasets) {
            if (data['name'] == e.target.innerHTML) {
                this.setState({chosenDataset: data['name']});
                this.props.updateimages(data['name']);
            }
        }
    }

    render() {

        const createSelectItems = () =>  {
            let items = [];
            for (let i = 0; i < this.state.datasets.length; i++) {        
                 items.push(<Dropdown.Item onClick={(e) => {this.handleChooseDataset(e)}}>{this.state.datasets[i]['name']}</Dropdown.Item>);   
            }
            return items;
        };

        return (
            <div>
                {this.state.datasetFilled === true &&
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            {this.state.chosenDataset}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {createSelectItems()}
                            {/* <Dropdown.Item onClick={(e) => {this.handleChooseDataset(e)}}>{this.state.datasets[0]['name']}</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => {this.handleChooseDataset(e)}}>{this.state.datasets[1]['name']}</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>}
            </div>
        );
    }
}

export default ChooseDataset;