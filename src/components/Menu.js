import React, {Fragment} from 'react';

const ITEMS = [
    "Home",
    "Work",
    "About",
    "Services",
    "Partners",
    "Stories",
    "Careers",
    "Contact"
];

const ITEMS_COMPACT = [
    "Work",
    "Service",
    "Stories",
    "About",
    "Careers",
    "Contact"
];

export const Menu = ({compact}) => {
  let items = compact ? ITEMS_COMPACT : ITEMS;

  return (
    <ul>
      {items.map((item) => {
        return (
          <Fragment key={item}>
            <li>{item}</li>
            {compact ? '' : <div className="line" />}
          </Fragment>
        );
      })}
    </ul>
  );
};