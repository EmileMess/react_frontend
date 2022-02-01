import React from "react";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import update from 'react-addons-update';
import Box from '@mui/material/Box';

import StateUpload from './StateUpload';
import StateOrganize from './StateOrganize';
import StateAnnotate from './StateAnnotate';
import StateTrain from './StateTrain';
import StateDeploy from './StateDeploy';

class Tool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStates: [true, false, false, false, false],
            currentState: 0,
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
        console.log("Current State:", this.state.currentState, "Max State:", this.state.allStates.length)
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
        console.log("Current State:", this.state.currentState, "Max State:", this.state.allStates.length)
    }

    render () {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <Box sx={{ p: 30, border: '3px dashed black' }}>
                    <p>{this.state.stateNames[this.state.currentState]}</p>
                    {this.state.allStates[0] && <StateUpload />}
                    {this.state.allStates[1] && <StateOrganize />}
                    {this.state.allStates[2] && <StateAnnotate />}
                    {this.state.allStates[3] && <StateTrain />}
                    {this.state.allStates[4] && <StateDeploy />}
                </Box>
                <IconButton disabled={!this.state.canBackward} onClick={this.handleBackward}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton disabled={!this.state.canForward} onClick={this.handleForward}>
                    <ArrowForwardIcon/>
                </IconButton>
            </div>
        )
    };
}

export default Tool;