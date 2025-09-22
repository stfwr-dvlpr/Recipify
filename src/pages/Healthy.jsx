import React, { useState } from 'react';
import "./Healthy.css";


const recipeData = {
  Breakfast: [
    {
      title: 'oats puding',
      image: 'https://images.pexels.com/photos/5150210/pexels-photo-5150210.jpeg',
      description: 'oats added with chie seeds , soked in milk and granished with fruits.',
    },
    {
      title: 'Vegetable Upma',
      image: 'https://images.pexels.com/photos/20408458/pexels-photo-20408458.jpeg',
      description: 'Semolina cooked with carrots, beans, and peas.',
    },
    {
      title: 'Poha',
      image: 'https://images.pexels.com/photos/30769669/pexels-photo-30769669.jpeg',
      description: 'Flattened rice cooked with spices and vegetables.',
    },
  ],
  'Lunch/Dinner': [
    {
      title: 'Khichdi',
      image: 'https://images.pexels.com/photos/6363501/pexels-photo-6363501.jpeg',
      description: 'Rice and lentils cooked together, light and nutritious.',
    },
    {
      title: 'Mix vegetable rice',
      image: 'https://images.pexels.com/photos/8992927/pexels-photo-8992927.jpeg',
      description: 'Mixed vegetables cooked with mild spices.',
    },
    {
      title: 'Beet root and carrot masala curry',
      image: 'https://images.pexels.com/photos/33672903/pexels-photo-33672903.jpeg',
      description: 'Yellow lentils with tempered spices, rich in protein.',
    },
  ],
  Snacks: [
    {
      title: 'Vegetable Salad',
      image: 'https://images.pexels.com/photos/11213742/pexels-photo-11213742.jpeg',
      description: 'Sprouted lentils mixed with chopped vegetables.',
    },
    {
      title: 'Boiled Chana',
      image: 'https://images.pexels.com/photos/23384616/pexels-photo-23384616.jpeg',
      description: 'Crunchy roasted chickpeas, healthy and protein-rich.',
    },
    {
      title: 'Fruit Chaat',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
      description: 'Seasonal fruits with a dash of spices and lemon juice.',
    },
  ],
  Drinks: [
    {
      title: 'Masala Chai',
      image: 'https://images.pexels.com/photos/2697931/pexels-photo-2697931.jpeg',
      description: 'Spiced tea made with milk and traditional Indian spices.',
    },
    {
      title: 'Lassi',
      image: 'https://images.pexels.com/photos/8489749/pexels-photo-8489749.jpeg',
      description: 'Refreshing yogurt-based drink, sweet or salted.',
    },
    {
      title: 'Coconut Water',
      image: 'https://images.pexels.com/photos/1879385/pexels-photo-1879385.jpeg',
      description: 'Natural hydration with essential electrolytes.',
    },
  ],
};

// Fallback for broken images
const getDirectImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/150';
  return url;
};

function IndianHealthyRecipes() {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');

  return (
    <div className="indian-healthy-container">
      <h1 className="indian-healthy-title">Explore Indian Healthy Recipes</h1>

      {/* Category Buttons */}
      <div className="indian-healthy-buttons">
        {Object.keys(recipeData).map((category) => (
          <button
            key={category}
            className={`indian-healthy-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="indian-healthy-grid">
        {recipeData[selectedCategory].map((item, idx) => (
          <div className="indian-healthy-card" key={idx}>
            <img
              src={getDirectImageUrl(item.image)}
              alt={item.title}
              className="indian-healthy-img"
              loading="lazy"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndianHealthyRecipes;
