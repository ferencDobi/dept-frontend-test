import React, { Component } from 'react';
import '../styles/App.scss';
import {Logo} from "./Logo";

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
        <div className="jumbotron">
          <nav>
            <Logo />
            <button className="menu-button" onClick={this.toggleMenu}>
              <h3 className={this.state.menuIsOpen ? "open" : ""}>Menu</h3>
            </button>
          </nav>
          <div className="line" />
        </div>
      </div>
    );
  }
}

export default App;
