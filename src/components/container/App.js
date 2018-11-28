import React, { Component } from 'react';
import '../../styles/App.scss';
import {Header} from "../presentational/Header";
import {PageBody} from "../presentational/PageBody";
import {Footer} from "../presentational/Footer";

class App extends Component {
  state = {
    menuIsOpen: false,
    scrolledToTop: true
  };

  toggleScrollPrevent = () => {
    if (this.state.menuIsOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  };

  toggleMenu = () => {
    this.setState(prevState => ({menuIsOpen: !prevState.menuIsOpen}), this.toggleScrollPrevent);
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        this.setState({scrolledToTop: false});
      } else {
        this.setState({scrolledToTop: true});
      }
    }
  }

  render() {
    return (
      <div>
        <Header {...this.state} toggleMenu={this.toggleMenu} />
        <PageBody />
        <Footer />
      </div>
    );
  }
}

export default App;
