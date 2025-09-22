import React, { useState } from 'react';
import './Seasonal.css';

const seasonalData = {
  Summer: [
    {
      title: 'mango lassi',
      image: 'https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg',
      description: 'Cool raw mango drink with spices, perfect for Indian summers.',
    },
    {
      title: 'Bottle Gourd (Lauki) Juice',
      image: 'https://images.pexels.com/photos/4443434/pexels-photo-4443434.jpeg',
      description: 'Refreshing bottle ground vegetable with cucumber and apple juice.',
    },
    {
      title: 'Watermelon Salad',
      image: 'https://images.pexels.com/photos/8755061/pexels-photo-8755061.jpeg',
      description: 'Fresh watermelon cubes tossed with chaat masala and lemon.',
    },
  ],
  Monsoon: [
    {
      title: 'Pakoras',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/paneer-pakora-recipe-1.jpg',
      description: 'Crispy vegetable fritters, monsoon’s all-time favorite snack.',
    },
    {
      title: 'Masala Chai',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/masala-chai-1.jpg',
      description: 'Indian spiced tea with ginger, cardamom, and cloves.',
    },
    {
      title: 'Bhutta (Roasted Corn)',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/bhutta-1.jpg',
      description: 'Char-grilled corn on the cob with lemon and masala.',
    },
  ],
  Winter: [
    {
      title: 'Gajar ka Halwa',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/12/gajar-ka-halwa.jpg',
      description: 'Traditional carrot dessert with ghee, milk, and dry fruits.',
    },
    {
      title: 'Sarson ka Saag & Makki Roti',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2019/11/sarson-ka-saag-recipe-2.jpg',
      description: 'Mustard greens curry with maize flour flatbreads.',
    },
    {
      title: 'Methi Paratha',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/methi-paratha-recipe-2.jpg',
      description: 'Whole wheat flatbreads flavored with fresh fenugreek leaves.',
    },
  ],
  Spring: [
    {
      title: 'Mango Lassi',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2019/04/mango-lassi-1.jpg',
      description: 'Refreshing mango yogurt drink with a hint of cardamom.',
    },
    {
      title: 'Fruit Chaat',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2019/11/fruit-chaat-recipe-1.jpg',
      description: 'Mixed seasonal fruits with chaat masala and lemon.',
    },
    {
      title: 'Vegetable Pulao',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/veg-pulao-1.jpg',
      description: 'Fragrant basmati rice with seasonal veggies and spices.',
    },
  ],
};

const getDirectImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/150';
  return url;
};

function SeasonalRecipes() {
  const [selectedCategory, setSelectedCategory] = useState('Summer');

  return (
    <div className="seasonal-container">
      <h1 className="seasonal-title">Indian Seasonal Recipes</h1>

      {/* Category Buttons */}
      <div className="seasonal-buttons">
        {Object.keys(seasonalData).map((category) => (
          <button
            key={category}
            className={`seasonal-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="seasonal-grid">
        {seasonalData[selectedCategory].map((item, idx) => (
          <div className="seasonal-card" key={idx}>
            <img
              src={getDirectImageUrl(item.image)}
              alt={item.title}
              className="seasonal-img"
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

export default SeasonalRecipes;
