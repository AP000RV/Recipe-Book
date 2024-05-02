import React from "react";

const Recipe = ({ key, title, ingredients, image }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={image} alt="" />

        <div className="description">
          <h4>{title}</h4>
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
