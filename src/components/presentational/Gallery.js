import React from "react";

export const Gallery = ({images}) => {
  return (
    <div className="gallery">
      {images.map((image, i) => {
        return (
          <a href={image.url} key={'image-' + i} >
            <img src={image.image} alt={image.alt} />
          </a>
        );
      })}
    </div>
  );
};