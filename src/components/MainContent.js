import React, {Component} from "react";
import ContentApi from "../api/ContentApi";
import {Card} from "./Card";

export class MainContent extends Component {
  state = { articles: [] };

  componentDidMount() {
    this.setState({articles: ContentApi.fetchArticles()});
  }

  render() {
    return (
      <div className="main-content">
        {this.state.articles.map(article => <Card key={article.id} article={article} />)}
      </div>
    );
  }
}