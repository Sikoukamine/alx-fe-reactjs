import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import RegistrationForm from './components/RegistrationForm'; // Import the RegistrationForm component
import FormikForm from './components/FormikForm'; // Import the FormikForm component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/register-controlled" element={<RegistrationForm />} /> {/* Route for controlled form */}
          <Route path="/register-formik" element={<FormikForm />} /> {/* Route for Formik form */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
