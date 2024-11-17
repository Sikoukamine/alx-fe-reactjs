import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
