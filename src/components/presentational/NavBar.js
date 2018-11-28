import React from 'react';
import {Logo} from "./Logo";

export const NavBar = ({className, children}) => {
  return (
      <nav className={className}>
        <Logo />
        {children}
      </nav>
  );
};