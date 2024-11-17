import React from "react";

const RecipeList = () => {
  const recipes = [
    { id: 1, name: "Spaghetti Bolognese" },
    { id: 2, name: "Chicken Curry" },
    { id: 3, name: "Vegetable Stir-fry" },
  ];

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
