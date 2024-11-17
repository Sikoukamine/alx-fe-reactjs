import React from "react";

const AddRecipeForm = () => {
  return (
    <div>
      <h2>Add a New Recipe</h2>
      <form>
        <label>
          Recipe Name:
          <input type="text" name="recipeName" />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea name="ingredients" />
        </label>
        <br />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
