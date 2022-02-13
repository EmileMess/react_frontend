import '..//..//..//App.css';
import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';

class ModalInput extends React.Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = {
      passedChecks: true,
    }
  }

  componentDidMount() {
    // Fixes an autoFocus bug
    setTimeout(() => {
      this.innerRef.current.focus();
    }, 1);
  }

  onKeyDown(e) {
    // Check if "Enter" key was pressed
    if (e.nativeEvent.keyCode === 13) {
      this.props.addnewobj();
    }
    // Check if "Escape" key was pressed
    if (e.nativeEvent.keyCode === 27) {
      this.props.closedialog();
    }
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>Classification</Form.Label>
        <Form.Control
          onKeyDown={this.onKeyDown}
          ref={this.innerRef}
          type="text"
          placeholder="Class Name"
          onChange={(e) => {this.props.saveclassnum(e)}}
        />
        <Form.Text className="text-muted">Leave empty to use previous class.</Form.Text>
        {this.state.passedChecks ? (null) : (
          <div>
            <br/>
            <Alert variant="danger" onClose={() => this.setState({isDoubleName: false})}>
              Class undefined
            </Alert>
          </div>
        )}

      </Form.Group>
    );
  }
}

  export default ModalInput;