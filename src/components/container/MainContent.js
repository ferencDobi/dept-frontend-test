import React, {Component} from "react";
import {Card} from "../presentational/Card";
import {connect} from "react-redux";

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        {this.props.articles.map(article => <Card key={article.id} article={article} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.caseReducer
  };
};

export default connect(mapStateToProps)(MainContent);