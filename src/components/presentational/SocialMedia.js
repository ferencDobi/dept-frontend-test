import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { icon: faFacebookF, url: "/" },
  { icon: faTwitter, url: "/" },
  { icon: faInstagram, url: "/" },
  { icon: faLinkedinIn, url: "/" }
];

export const SocialMedia = () => {
  return (
    <div className="social">
      {socialLinks.map((social, i) => {
        return (
            <a key={i} href={social.url}><FontAwesomeIcon icon={social.icon}/></a>
        );
      })}
    </div>
  );
};