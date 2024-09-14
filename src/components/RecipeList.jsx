import React, { useState } from "react";
import "./RecipeList.css";
const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const handleShowIngredients = (recipe) => {
    setSelectedRecipe(recipe);
    console.log(recipe);
  };
  const closeModal = () => {
    setSelectedRecipe(null);
  };
  return (
    <>
      <div className="recipe-cards">
        {recipes.map((r, index) => (
          <div
            className="card"
            style={{ width: "18rem", margin: "1rem" }}
            key={index}
          >
            <img
              src={r.recipe.image}
              alt={r.recipe.label}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{r.recipe.label}</h5>
              <p className="card-text">
                <strong>Calories: </strong>
                {Math.round(r.recipe.calories)} kcal;&nbsp;
                <strong>Cuisine:</strong>
                {r.recipe.cuisineType.join(" , ")};&nbsp;
                <strong>Diet Labels:</strong>
                {r.recipe.dietLabels.join(" , ")}
              </p>
              <button
                className="ingredientBtn"
                onClick={() => handleShowIngredients(r.recipe)}
              >
                Show Ingredients
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div className="modal">
          {console.log("Modal is being rendered")} {/* Check if this logs */}
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedRecipe.label}</h2>
            <ul>
              {selectedRecipe.ingredientLines.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeList;
