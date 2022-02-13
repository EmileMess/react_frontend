import React, { Component, KeyboardEventHandler } from 'react';

import CreatableSelect from 'react-select/creatable';
import { ActionMeta, MultiValue, OnChangeValue } from 'react-select';
import { Alert } from 'react-bootstrap';


const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

interface State {
  readonly inputValue: string;
  readonly value: readonly Option[];
  readonly isDoubleName: boolean;
}

interface Props {
  setClasses(arg: MultiValue<Option>): void
}

class CreatableInputOnly extends Component<Props, State> {
  state: State = {
    inputValue: '',
    value: [],
    isDoubleName: false,
  };

  handleDelete = (
    value: OnChangeValue<Option, true>,
    actionMeta: ActionMeta<Option>
  ) => {
    this.setState({ value }, () => this.props.setClasses(this.state.value));
  };

  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { inputValue, value } = this.state;

    for (var i = 0; i < value.length; i++) {
      if (value[i]["label"] == inputValue) {
        console.log("Already defined class:", inputValue)
        this.setState({isDoubleName: true});
        return;
      }
    }

    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        // console.log('Value Added');
        this.setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        }, () => this.props.setClasses(this.state.value));
        event.preventDefault();
    }
  };

  render() {
    const { inputValue, value } = this.state;
    return (
      <div>
        {this.state.isDoubleName ? (
          <Alert variant="danger" onClose={() => this.setState({isDoubleName: false})} dismissible>
          <Alert.Heading>Class already exists</Alert.Heading>
          <p>
            Please choose a different class name
          </p>
          </Alert>
        ) : (null)}
        <CreatableSelect
          components={components}
          inputValue={inputValue}
          isClearable
          isMulti
          autoFocus
          menuIsOpen={false}
          onChange={this.handleDelete}
          onInputChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Type class name and press enter..."
          value={value}
        />
      </div>
    );
  }
}

export default CreatableInputOnly