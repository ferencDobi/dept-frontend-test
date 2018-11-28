import React from "react";

export const Card = ({article}) => {
  return (
      <div>
        <img src={article.image} alt={article.title} />
        <h3>{article.name}</h3>
        <h1>{article.title}</h1>
        <button>View Case</button>
      </div>
  );
};