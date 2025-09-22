import './Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snacks from './Snacks';

function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const steps = [
    {
      description: 'Select veggies, dairy, fruits, and more from our list.',
    },
    {
      description: 'Let Recipify turn your selection into a delicious recipe.',
    },
    {
      description: 'Cook and enjoy your custom-made dish.',
    },
  ];

  const { description } = steps[activeStep];

  const categories = [
    'Desserts',
    'Cuisines',
    'Snacks',
    'Meals',
    'Healthy',
    'Vegan',
    'Quick Bites',
    'Seasonal',
  ];

  // ✅ Full Recipe to Route Mapping
  const recipeMap = {
    // Indian
    'paneer butter masala': '/cuisines',
    'aloo paratha': '/cuisines',
    'masala dosa': '/cuisines',
    'idli sambar': '/cuisines',
    'idli': '/cuisines',
    'dosa': '/cuisines',

    // Italian
    'margherita pizza': '/cuisines',
    'spaghetti carbonara': '/cuisines',
    'pizza': '/cuisines',
    'pasta': '/cuisines',

    // Chinese
    'kung pao chicken': '/cuisines',
    'vegetable fried rice': '/cuisines',
    'fried rice': '/cuisines',

    // Mexican
    'tacos': '/cuisines',
    'quesadillas': '/cuisines',

    // Other Pages
    'biryani': '/meals',
    'gulab jamun': '/desserts',
    'ice cream': '/desserts',
    'sandwich': '/snacks',
    'salad': '/healthy',
    'chocolate lava cake': '/desserts',
    'lava cake': '/desserts',
    'oreo mug cake': '/desserts',
    'oreo': '/desserts',
    'mug cake': '/desserts',
    'coconut ladoo': '/desserts',
    'strawberry': '/desserts',
    'fruit custard': '/desserts',

    // Snacks extended
   // Snack Recipes (Search Routing)
'potato chips': '/snacks',
'nachos': '/snacks',
'popcorn': '/snacks',
'chocolate bars': '/snacks',
'cookies': '/snacks',
'cupcakes': '/snacks',
'fresh fruits': '/snacks',
'yogurt': '/snacks',
'smoothies': '/snacks',
'jerky': '/snacks',
'boiled eggs': '/snacks',
'peanut butter': '/snacks',
'samosa': '/snacks',
'pakora': '/snacks',
'dhokla': '/snacks',
'murukku': '/snacks',
'bhel puri': '/snacks',

  };

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    const path = recipeMap[query];

    if (path) {
      navigate(path, { state: { search: query } });
    } else if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Recipify</h1>
      <p className="home-subtitle">What's on your mind?</p>

      {/* 🔍 Search Bar */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search recipes or ingredients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <span
          className="search-icon"
          onClick={handleSearch}
          style={{ cursor: 'pointer' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="black" viewBox="0 0 24 24">
            <path d="M21.71 20.29l-3.388-3.387a8 8 0 1 0-1.414 1.414l3.387 3.387a1 1 0 0 0 1.415-1.414zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
          </svg>
        </span>
      </div>

      {/* 🔽 Small Search Button */}
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      {/* 🧭 Category Grid */}
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div
            className="category-card"
            key={idx}
            onClick={() => {
              const lowerCat = cat.toLowerCase().replace(' ', '');
              if (['desserts', 'cuisines', 'snacks', 'meals', 'healthy', 'vegan', 'quickbites', 'seasonal'].includes(lowerCat)) {
                navigate(`/${lowerCat}`);
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* 🛠️ How It Works Section */}
      <div className="how-to-use">
        <div className="step-text">
          <h2>How It Works</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* 🔘 Step Dots */}
      <div className="step-dots">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeStep === index ? 'active' : ''}`}
            onClick={() => setActiveStep(index)}
          ></span>
        ))}
      </div>

      <footer className="footer">
        © 2025 Recipify. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
