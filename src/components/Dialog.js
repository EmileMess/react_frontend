import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '..//App.css';
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

class ModalInput extends React.Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    // This should fix the autoFocus issue.
    setTimeout(() => {
      this.innerRef.current.focus();
    }, 1);
  }

  onKeyDown(e) {
    // Check if "Enter" key was pressed
    if (e.nativeEvent.keyCode === 13) {
      this.props.addnewobj();
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
      </Form.Group>
    );
  }
}

  export default ModalInput;