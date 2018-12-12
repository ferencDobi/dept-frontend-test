import React, {Component} from "react";
import {connect} from "react-redux";
import {Select} from "../presentational/Select";

class FilterSelection extends Component {
  render() {
    return (
        <div className="filter-selection">
          <h3>Show me</h3>
          <Select placeholder="all work" options={this.props.jobs} />
          <h3>in</h3>
          <Select placeholder="all industries" options={this.props.industries} />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.categories.map(category => category.job),
    industries: [...new Set(state.categories.map(category => category.industry))]
  };
};

export default connect(mapStateToProps)(FilterSelection);
