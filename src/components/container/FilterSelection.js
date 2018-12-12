import React, {Component} from "react";
import {connect} from "react-redux";
import {Select} from "../presentational/Select";
import {selectIndustry, selectJob} from "../../actions/categoryActions";
import {fetchCasesByCategory} from "../../actions/caseActions";

class FilterSelection extends Component {
  getSnapshotBeforeUpdate(prevProps) {
    let { selectedJob, selectedIndustry } = this.props;

    if (prevProps.selectedJob !== selectedJob ||
        prevProps.selectedIndustry !== selectedIndustry) {
      this.props.fetchCasesByCategory(selectedJob, selectedIndustry, 15);
    }
  }

  render() {
    let { selectJob, selectedJob, selectIndustry, selectedIndustry } = this.props;

    return (
        <div className="filter-selection">
          <h3>Show me</h3>
          <Select title="all work" select={selectJob}
                  selected={selectedJob} options={this.props.jobs} />
          <h3>in</h3>
          <Select title="all industries" select={selectIndustry}
                  selected={selectedIndustry} options={this.props.industries} />
        </div>
    );
  }
}

const filterJobs = (categories, selectedIndustry) => {
  let filtered = selectedIndustry ? categories.filter(category => category.industry === selectedIndustry) : categories;
  return filtered.map(category => category.job);
};

const filterIndustries = (categories, selectedJob) => {
  let filtered = selectedJob ? categories.filter(category => category.job === selectedJob) : categories;
  return [...new Set(filtered.map(category => category.industry))];
};

const mapStateToProps = state => {
  let selection = state.selection;

  return {
    jobs: filterJobs(selection.categories, selection.selectedIndustry),
    industries: filterIndustries(selection.categories, selection.selectedJob),
    selectedJob: selection.selectedJob,
    selectedIndustry: selection.selectedIndustry
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectJob: job => {
      if (job === "all work") job = null;
      dispatch(selectJob(job))
    },

    selectIndustry: industry => {
      if (industry === "all industries") industry = null;
      dispatch(selectIndustry(industry));
    },

    fetchCasesByCategory: (job, industry, limit) => {
      dispatch(fetchCasesByCategory(job, industry, limit));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelection);
