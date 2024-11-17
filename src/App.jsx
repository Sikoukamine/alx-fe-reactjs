import React from "react";
import AddRecipeForm from "./components/AddRecipeForm"; // Adjust path if needed
import RecipeList from "./components/RecipeList";     // Adjust path if needed

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
