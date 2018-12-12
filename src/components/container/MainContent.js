import React, {Component, Fragment} from "react";
import {Card} from "../presentational/Card";
import {connect} from "react-redux";
import FilterSelection from "./FilterSelection";

class MainContent extends Component {
  render() {
    return (
        <Fragment>
          <FilterSelection/>
          <div className="main-content">
            {this.props.articles.map(article => <Card key={article.id} article={article} />)}
          </div>
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.cases
  };
};

export default connect(mapStateToProps)(MainContent);