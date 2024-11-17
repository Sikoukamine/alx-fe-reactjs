import React from 'react';
import AddRecipeForm from './AddRecipeForm';  // Adjust the path if necessary
import RecipeList from './RecipeList';  // Adjust the path if necessary

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
