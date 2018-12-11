import React from "react";

const fallbackImage = 'https://picsum.photos/800/500/?random';

export const Card = ({article}) => {
  return (
      <div>
        <img src={article.image} alt="" onError={event => event.target.src = fallbackImage} />
        <h3>{article.name}</h3>
        <h1>{article.title}</h1>
        <button>View Case</button>
      </div>
  );
};