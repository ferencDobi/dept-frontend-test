import React from 'react';
import {NavBar} from "./NavBar";
import {Menu} from "./Menu";

export const Jumbotron = props => {
  let {menuIsOpen} = props;

  return (
      <div className={'jumbotron' + (menuIsOpen ? ' open' : '')}>
        <NavBar {...props} />
        <Menu />
      </div>
  )
};