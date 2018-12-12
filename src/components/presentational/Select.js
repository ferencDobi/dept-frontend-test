import React, {Component} from 'react';

export class Select extends Component {
  state = {
    value: this.props.placeholder
  };

  selectOption = event => {
    this.setState({value: event.target.value});
  };

  render() {
    let {placeholder, options} = this.props;
    let value = this.state.value;

    return (
        <div className="select-wrapper">
          <span>{value}</span>
          <select value={value} onChange={this.selectOption}>
            <option value="">{placeholder}</option>
            {options.map(option =>
                <option key={option} value={option}>{option}</option>
            )}
          </select>
        </div>
    );
  }
}