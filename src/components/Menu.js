import React, {Fragment} from 'react';

const ITEMS = [
    "Home",
    "Work",
    "About",
    "Services",
    "Partners",
    "Stories",
    "Careers",
    "Contacts"
];

export const Menu = () => {
  return (
    <ul>
      {ITEMS.map((item) => {
        return (
          <Fragment>
            <li key={item}>{item}</li>
            <div className="line" />
          </Fragment>
        );
      })}
    </ul>
  );
};