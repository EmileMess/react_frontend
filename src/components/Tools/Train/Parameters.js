import React, { Component } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


class Parameters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useGPU: false,
            xy: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: (event.target.checked) });
    };

    render() {
        return (
            <div>
                <FormControlLabel
                    control={<Switch checked={this.state.useGPU} onChange={this.handleChange} name="useGPU" />}
                    label="Use GPU"
                />
                <FormControlLabel
                    control={<Switch checked={this.state.xy} onChange={this.handleChange} name="xy" />}
                    label="xy"
                />
            </div>
        );
    }
}

export default Parameters;