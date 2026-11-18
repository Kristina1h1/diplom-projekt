import React from "react";
import { images } from "../../data/images";

function CatCard({ cat, onOpen }) {
  return (
    <div className="cat-card" onClick={() => onOpen(cat)}>
      <div className="cat-image">
        <img src={images[cat.image]} alt={cat.name} />
      </div>
      <div className="cat-info">
        <h3>{cat.name}</h3>
        <p className="cat-color">{cat.color} окрас • {cat.age}</p>
        <span className="cat-title">{cat.title}</span>
      </div>
    </div>
  );
}

export default CatCard;