import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const APP_ID = "f1fe2133";
const APP_KEY = "d41a56678cdcdd085c00ace3cabeb636";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const searchItem = (e) => {
    if (e && e.target) {
      setSearch(e.target.value);
    }
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    searchItem("");
  };

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={(e) => searchItem(e)}
          placeholder="search paneer, chicken, banana or more..."
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        <div className="recipe">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.ingredients.foodId}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
