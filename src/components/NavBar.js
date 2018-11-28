import React from 'react';
import {Logo} from "./Logo";

export const NavBar = ({menuIsOpen, toggleMenu}) => {
  return (
      <nav>
        <Logo />
        <button onClick={toggleMenu}>
          <h3 className={menuIsOpen ? "open" : ""}>Menu</h3>
        </button>
      </nav>
  );
};