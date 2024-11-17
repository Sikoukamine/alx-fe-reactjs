import React from "react";
import AddRecipeForm from "alx-fe-reactjs/src/components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

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
