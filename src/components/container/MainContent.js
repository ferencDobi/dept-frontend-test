import React, {Component} from "react";
import ContentApi from "../../api/ContentApi";
import {Card} from "../presentational/Card";

export class MainContent extends Component {
  state = { articles: [] };

  componentDidMount() {
    ContentApi.fetchCases(15).then(response => {
      this.setState({articles: response.data})
    }).catch(error => console.error(error));
  }

  render() {
    return (
      <div className="main-content">
        {this.state.articles.map(article => <Card key={article.id} article={article} />)}
      </div>
    );
  }
}