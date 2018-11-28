import React from "react";
import {Gallery} from "./Gallery";

const text = `We value a great working relationship with our clients above all else. It’s why they often come to our 
  parties. It’s also why we’re able to challenge and inspire them to reach for the stars.`;

const CLIENTS = new Array(12).fill({
  url: "https://imgplaceholder.com",
  image: "https://imgplaceholder.com/250x126/transparent/0e0e0e?text=Company",
  alt: "ImgPlaceholder"});

export const ClientList = () => {
  return (
      <div className="client-list">
        <h1>Clients</h1>
        <p>{text}</p>
        <Gallery images={CLIENTS} />
      </div>
  );
};