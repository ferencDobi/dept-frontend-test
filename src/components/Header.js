import React, {Fragment} from 'react';
import {NavBar} from "./NavBar";
import {Menu} from "./Menu";

export const Header = ({scrolledToTop, menuIsOpen, toggleMenu}) => {

  const calculateClasses = (initial) => {
    let classes = [initial || ""];
    if (menuIsOpen) classes.push("open");
    else if (!scrolledToTop) classes.push("scrolled");
    return classes.join(' ');
  };

  return (
    <Fragment>
      <NavBar className={calculateClasses()}>
        <button onClick={toggleMenu}>
          <h3 className={menuIsOpen ? "open" : ""}>Menu</h3>
        </button>
      </NavBar>
      <div className={calculateClasses("jumbotron")}>
        <Menu compact={false} />
      </div>
    </Fragment>
  )
};