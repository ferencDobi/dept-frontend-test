import React, { Component } from 'react';
import '../styles/App.scss';
import {Jumbotron} from "./Jumbotron";
import {PageBody} from "./PageBody";
import {Footer} from "./Footer";

class App extends Component {
  state = {
    menuIsOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({menuIsOpen: !prevState.menuIsOpen}));
  };

  render() {
    return (
      <div className="App">
        <Jumbotron menuIsOpen={this.state.menuIsOpen} toggleMenu={this.toggleMenu} />
        <PageBody />
        <Footer />
      </div>
    );
  }
}

export default App;
