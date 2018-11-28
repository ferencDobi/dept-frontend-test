import React, { Component } from 'react';
import '../styles/App.scss';
import {Header} from "./Header";
import {PageBody} from "./PageBody";
import {Footer} from "./Footer";

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
      <div>
        <Header {...this.state} toggleMenu={this.toggleMenu} />
        <PageBody />
        <Footer />
      </div>
    );
  }
}

export default App;
