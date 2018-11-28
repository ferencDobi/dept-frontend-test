import React from 'react';
import {Logo} from "./Logo";

export const NavBar = ({children}) => {
  return (
      <nav>
        <Logo />
        {children}
      </nav>
  );
};