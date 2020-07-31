import React, { Component } from 'react';
import countries from './countries.js'
//import CreatableSelect from 'react-select';
import './CreatableAdvanced.css'
import { Creatable } from 'react-select';
type State = {
  options: [{ [string]: string }],
  value: string | void,
};

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});


export default class CreatableAdvanced extends Component<*, State> {
  state = {
    isLoading: false,
    options: countries,
    value: undefined,
  };
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  };
  handleCreate = (inputValue: any) => {
    this.setState({ isLoading: true });
    console.group('Option created');
    console.log('Wait a moment...');
    setTimeout(() => {
      const { options } = this.state;
      const newOption = createOption(inputValue);
      console.log(newOption);
      console.groupEnd();
      this.setState({
        isLoading: false,
        options: [...options, newOption],
        value: newOption,
      });
    }, 1000);
  };
  render() {
    const { isLoading, options, value } = this.state;
    return (
      <Creatable
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={this.handleChange}
        onCreateOption={this.handleCreate}
        options={options}
        value={value}
      />
    );
  }
}