import React from 'react';
import {NavBar} from "./NavBar";
import {Menu} from "./Menu";

export const Jumbotron = ({menuIsOpen, toggleMenu}) => {
  return (
    <div className={'jumbotron' + (menuIsOpen ? ' open' : '')}>
      <NavBar>
        <button onClick={toggleMenu}>
          <h3 className={menuIsOpen ? "open" : ""}>Menu</h3>
        </button>
      </NavBar>
      <Menu compact={false} />
    </div>
  )
};