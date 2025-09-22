import React from 'react';
import { useLocation } from 'react-router-dom';
import { allRecipes } from '../data/recipes';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q')?.toLowerCase() || '';

  const filteredRecipes = allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="search-results-container">
      <h2>Search Results for "{searchTerm}"</h2>
      {filteredRecipes.length > 0 ? (
        <div className="results-grid">
          {filteredRecipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.quickSteps}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">Recipe not found. Please try another one!</div>
      )}
    </div>
  );
};

export default SearchResults;
