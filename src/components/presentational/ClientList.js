import React from "react";
import {Gallery} from "./Gallery";

const text = `We value a great working relationship with our clients above all else. It’s why they often come to our 
  parties. It’s also why we’re able to challenge and inspire them to reach for the stars.`;

const CLIENTS = new Array(12).fill({
  url: "https://placeholder.com",
  image: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png",
  alt: "Placeholder"});

export const ClientList = () => {
  return (
      <div className="client-list">
        <h1>Clients</h1>
        <p>{text}</p>
        <Gallery images={CLIENTS} />
      </div>
  );
};