import React from "react";
import {NavBar} from "./NavBar";
import {Menu} from "./Menu";
import {SocialMedia} from "./SocialMedia";
import {Legal} from "./Legal";

export const Footer = () => {
  return (
    <div className="footer">
      <NavBar>
        <Menu compact={true} />
        <SocialMedia />
      </NavBar>
      <Legal />
    </div>
  );
};