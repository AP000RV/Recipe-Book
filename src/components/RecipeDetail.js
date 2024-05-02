import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const APP_ID = "f1fe2133";
const APP_KEY = "d41a56678cdcdd085c00ace3cabeb636";

const RecipeDetail = () => {
  const { recipeID } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${recipeID}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setRecipeDetails(data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch Recipe details");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeID]);

  return (
    <div className="recipe-section">
      {loading ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="recipe-title">{recipeDetails.Title}</div>
            <div className="recipe-plot">{recipeDetails.Plot}</div>
            <div className="recipe-info">
              <div>
                <span>Full Detail</span>
                <span>{recipeDetails.shareAs}</span>
              </div>
              <div>
                <span>Source</span>
                <span>{recipeDetails.Source}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={recipeDetails.image} alt={recipeDetails.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
