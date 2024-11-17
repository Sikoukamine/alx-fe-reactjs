import React from 'react';
import AddRecipeForm from './AddRecipeForm';  // Correct the path if needed
import RecipeList from './RecipeList';  // Correct the path if needed

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
