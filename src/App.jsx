import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import YourRecipes from './pages/YourRecipes';
import Desserts from './pages/Desserts';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Cuisines from './pages/Cuisines';
import SearchResults from './pages/SearchResults'; // ✅ NEW
import Snacks from './pages/Snacks';
import Meals from './pages/Meals';
import IndianHealthyRecipes from './pages/Healthy';
import VeganRecipes from './pages/Vegan';
import SeasonalRecipes from './pages/Seasonal';
import QuickBites from './pages/Quickbites';
import { useAuth } from './context/AuthContext';

function App() {
  const {isAuthenticated, loading} = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated? <Home /> : <Navigate to='/login' replace />
          }
        />
        <Route
          path="/create"
          element={
          isAuthenticated?   <Create /> : <Navigate to='/login' replace /> 
          }
        />
        <Route
          path="/your-recipes"
          element={
          isAuthenticated?  <YourRecipes /> : <Navigate to='/login' replace /> 
          }
        />
        <Route
          path="/desserts"
          element={
             <Desserts /> 
          }
        />
        <Route
          path="/cuisines"
          element={
             <Cuisines /> 
          }
        />
         <Route
          path="/quickbites"
          element={
             <QuickBites /> 
          }
        />
        <Route
          path="/snacks"
          element={
             <Snacks /> 
          }
        />
        <Route
          path="/vegan"
          element={
             <VeganRecipes /> 
          }
        />
        <Route
          path="/seasonal"
          element={
             <SeasonalRecipes /> 
          }
        />
       <Route
            path="/meals"
            element={
              <Meals /> 
            }
        />
       <Route
            path="/healthy"
            element={
              <IndianHealthyRecipes /> 
            }
        />

        <Route
          path="/search"
          element={
             <SearchResults /> 
          }
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
