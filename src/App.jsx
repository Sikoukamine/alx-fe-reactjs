import React from 'react';
import AddRecipeForm from './AddRecipeForm'; // adjust the path based on where AddRecipeForm is located
import RecipeList from './RecipeList'; // adjust the path based on where RecipeList is located

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
