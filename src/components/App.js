import React, { Component } from 'react';
import '../styles/App.scss';
import {Logo} from "./Logo";
import {Menu} from './Menu';

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
        <div className={'jumbotron' + (this.state.menuIsOpen ? ' open' : '')}>
          <nav>
            <Logo />
            <button onClick={this.toggleMenu}>
              <h3 className={this.state.menuIsOpen ? "open" : ""}>Menu</h3>
            </button>
          </nav>
          <Menu />
        </div>
      </div>
    );
  }
}

export default App;
