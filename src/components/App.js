import React, { Component } from 'react';
import '../styles/App.scss';
import {Jumbotron} from "./Jumbotron";
import {PageBody} from "./PageBody";
import {Footer} from "./Footer";

class App extends Component {
  state = {
    menuIsOpen: false,
    scrolledToTop: true
  };

  toggleMenu = () => {
    this.setState(prevState => ({menuIsOpen: !prevState.menuIsOpen}));
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        console.log("scrolled down");
        this.setState({scrolledToTop: false});
      } else {
        console.log("scrolled up");
        this.setState({scrolledToTop: true});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Jumbotron {...this.state} toggleMenu={this.toggleMenu} />
        <PageBody />
        <Footer />
      </div>
    );
  }
}

export default App;
