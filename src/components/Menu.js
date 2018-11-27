import React from 'react';

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
      {ITEMS.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};