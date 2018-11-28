import React from 'react';

const LEGALS = [
    "Chamber of Commerce: 63464101",
    "VAT: NL 8552.47.502.B01",
    "\u00A9 2018 Dept Agency"
];

const LINKS = [
  { target: "Terms and conditions", route: "/" },
  { target: "Privacy policy", route: "/" },
  { target: "Cookie policy", route: "/" }
];

export const Legal = () => {
  return (
    <div className="legal">
      <div>
        {LINKS.map(link => <a href={link.route} key={link.target}>{link.target}</a>)}
      </div>
      <div>
        {LEGALS.map(legal => <p>{legal}</p>)}
      </div>
    </div>
  );
};