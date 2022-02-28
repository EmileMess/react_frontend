import React from "react";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import update from 'react-addons-update';
import { NavLink } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import StateUpload from './StateUpload';
import StateOrganize from './StateOrganize';
import StateAnnotate from './StateAnnotate';
import StateTrain from './StateTrain';
import StateDeploy from './StateDeploy';

class Tool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStates: [false, false, true, false, false],
            currentState: 2,
            canForward: true, // TODO: set canForward on right trigger
            canBackward: true, // TODO: set canBackward on right trigger
            stateNames: ["Upload", "Organize", "Annotate", "Train", "Deploy"]
        }
    }

    handleForward = (e) => {
        // if not at last state -> hide the current state and show new
        if (this.state.currentState != this.state.allStates.length - 1) {
            this.setState(update(this.state, {
                allStates: {
                    [this.state.currentState]: {
                        $set: false
                    },
                    [this.state.currentState + 1]: {
                        $set: true
                    }
                }
            }));
            // switch to next state
            this.setState({currentState: this.state.currentState + 1});
        }
    }

    handleBackward = (e) => {
        // if not at first state -> hide the current state and show previous one
        if (this.state.currentState != 0) {
            this.setState(update(this.state, {
                allStates: {
                    [this.state.currentState]: {
                        $set: false
                    },
                    [this.state.currentState - 1]: {
                        $set: true
                    }
                }
            }));
            // switch to previous state
            this.setState({currentState: this.state.currentState - 1});
        }
    }

    render () {
        return (
            <div>
            {/* <div className="BackgroundFlow" ></div> */}
                <br/>
                <br/>

                {/* CONTENT */}

                <div className="box">
                    {/* <a className="ToolTitle">{this.state.stateNames[this.state.currentState]}</a> */}
                    <br />
                    <br />
                    <div style={{fontFamily: 'Trebuchet MS', borderRadius: '10px', background: 'white', width: "80%", margin: "auto", boxShadow: "5px 5px 20px #cccccccc", padding: "1em"}}>
                        {this.state.allStates[0] && <StateUpload />}
                        {this.state.allStates[1] && <StateOrganize />}
                        {this.state.allStates[2] && <StateAnnotate />}
                        {this.state.allStates[3] && <StateTrain />}
                        {this.state.allStates[4] && <StateDeploy />}
                    </div>
                    <br />
                    <br />
                    <br />
                    <div >
                        <IconButton disabled={!this.state.canBackward} onClick={this.handleBackward}>
                            <ArrowBackIcon/>
                        </IconButton>
                        <IconButton disabled={!this.state.canForward} onClick={this.handleForward}>
                            <ArrowForwardIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    };
}

export default Tool;