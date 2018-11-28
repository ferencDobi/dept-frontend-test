import React from "react";

const text = 'Question? We are here to help!';

export const ContactForm = () => {
  return (
      <div className="contact-form">
        <h1>{text}</h1>
        <div className="name-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="email-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email "/>
        </div>
        <div className="message-box">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" cols="32" rows="6" />
        </div>
        <button>Send</button>
      </div>
  );
};