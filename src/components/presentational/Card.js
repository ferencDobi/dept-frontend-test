import React from "react";

const fallbackImage = 'https://picsum.photos/1400/940/?random';

export const Card = ({article}) => {
  return (
      <div>
        <img src={article.image} alt="" onError={() => this.img.src = fallbackImage} />
        <h3>{article.name}</h3>
        <h1>{article.title}</h1>
        <button>View Case</button>
      </div>
  );
};