import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import YourRecipes from './pages/YourRecipes';
import Desserts from './pages/Desserts';
import Login from './pages/Login';
import Cuisines from './pages/Cuisines';
import SearchResults from './pages/SearchResults'; // ✅ NEW
import Snacks from './pages/Snacks';
import Meals from './pages/Meals';
import IndianHealthyRecipes from './pages/Healthy';
import VeganRecipes from './pages/Vegan';
import SeasonalRecipes from './pages/Seasonal';
import QuickBites from './pages/Quickbites';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/create"
          element={
            isAuthenticated ? <Create /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/your-recipes"
          element={
            isAuthenticated ? <YourRecipes /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/desserts"
          element={
            isAuthenticated ? <Desserts /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/cuisines"
          element={
            isAuthenticated ? <Cuisines /> : <Navigate to="/login" replace />
          }
        />
         <Route
          path="/quickbites"
          element={
            isAuthenticated ? <QuickBites /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/snacks"
          element={
            isAuthenticated ? <Snacks /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/vegan"
          element={
            isAuthenticated ? <VeganRecipes /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/seasonal"
          element={
            isAuthenticated ? <SeasonalRecipes /> : <Navigate to="/login" replace />
          }
        />
       <Route
            path="/meals"
            element={
             isAuthenticated ? <Meals /> : <Navigate to="/login" replace />
            }
        />
       <Route
            path="/healthy"
            element={
             isAuthenticated ? <IndianHealthyRecipes /> : <Navigate to="/login" replace />
            }
        />

        <Route
          path="/search"
          element={
            isAuthenticated ? <SearchResults /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
