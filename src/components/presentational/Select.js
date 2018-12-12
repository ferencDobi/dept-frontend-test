import React, {Component} from 'react';

export class Select extends Component {
  selectOption = event => {
    this.props.select(event.target.value);
  };

  render() {
    let {title, selected, options} = this.props;

    return (
        <div className="select-wrapper">
          <span>{selected ? selected : title}</span>
          <select value={selected ? selected : title} onChange={this.selectOption}>
            <option value="">{title}</option>
            {options.map(option =>
                <option key={option} value={option}>{option}</option>
            )}
          </select>
        </div>
    );
  }
}