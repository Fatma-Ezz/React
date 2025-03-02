import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; // Assuming RecipeDetails component exists
import EditRecipeForm from './components/EditRecipeForm'; // Assuming EditRecipeForm exists
import FavoritesList from './components/FavoritesList'; // New: Favorites feature
import RecommendationsList from './components/RecommendationsList'; // New: Recommendations feature

const App = () => {
  return (
    <Router> {/* Wrap your app in Router for routing functionality */}
      <div>
        <h1>Recipe Sharing App</h1>
        {/* Include the search bar to filter recipes */}
        <SearchBar /> 

        <Routes> 
          {/* Define your routes here */}
          
          {/* Route for viewing all recipes */}
          <Route path="/" element={<RecipeList />} />
          
          {/* Route for viewing the details of a specific recipe */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          
          {/* Route for adding a new recipe */}
          <Route path="/add" element={<AddRecipeForm />} />
          
          {/* Route for editing a specific recipe */}
          <Route path="/edit/:id" element={<EditRecipeForm />} />

          {/* New: Route for viewing favorite recipes */}
          <Route path="/favorites" element={<FavoritesList />} />

          {/* New: Route for viewing personalized recommendations */}
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
