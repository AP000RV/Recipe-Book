import React, { useState, useEffect } from "react";

const Recipe = ({ key, title, ingredients, image }) => {
  return (
    <div className="recipeItem">
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
