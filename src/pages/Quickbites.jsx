import React, { useState } from 'react';
import './QuickBites.css';

const quickBitesData = {
  'Street Snacks': [
    {
      title: 'Kanda Bhaji',
      image: 'https://images.pexels.com/photos/13220364/pexels-photo-13220364.jpeg',
      description: 'Crispy onion fritters, popular during monsoons in Maharashtra.',
    },
    {
      title: 'Mirchi Bajji',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/06/mirchi-bajji-recipe-500x500.jpg',
      description: 'Green chilies stuffed and deep fried in gram flour batter.',
    },
    {
      title: 'Dabeli',
      image: 'https://www.pexels.com/photo/authentic-misal-pav-with-spicy-curry-and-pav-30769679/',
      description: 'Gujarati street snack of spicy potato filling in buns with chutneys.',
    },
  ],
  'Mini Snacks': [
    {
      title: 'Appe (Paniyaram)',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/paniyaram-recipe-500x500.jpg',
      description: 'South Indian mini dumplings made from idli/dosa batter.',
    },
    {
      title: 'Masala Papad',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/05/masala-papad-recipe-500x500.jpg',
      description: 'Crispy fried papad topped with onions, tomatoes, and spices.',
    },
    {
      title: 'Paneer Tikka Bites',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2012/06/paneer-tikka-recipe-500x500.jpg',
      description: 'Marinated paneer cubes grilled with spices and veggies.',
    },
  ],
  'Chaat': [
    {
      title: 'Aloo Tikki Chaat',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/aloo-tikki-chaat-recipe-500x500.jpg',
      description: 'Crispy potato patties topped with chutneys, yogurt, and sev.',
    },
    {
      title: 'Sev Puri',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/10/sev-puri-recipe-500x500.jpg',
      description: 'Crispy puris filled with potato, chutneys, onions, and sev.',
    },
    {
      title: 'Ragda Pattice',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/ragda-pattice-recipe-500x500.jpg',
      description: 'Potato patties served with white peas curry and tangy chutneys.',
    },
  ],
};

// Fallback for missing images
const getDirectImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/150';
  return url;
};

function QuickBites() {
  const [selectedCategory, setSelectedCategory] = useState('Street Snacks');

  return (
    <div className="quickbites-container">
      <h1 className="quickbites-title">Indian Quick Bites</h1>

      {/* Category Buttons */}
      <div className="quickbites-buttons">
        {Object.keys(quickBitesData).map((category) => (
          <button
            key={category}
            className={`quickbites-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="quickbites-grid">
        {quickBitesData[selectedCategory].map((item, idx) => (
          <div className="quickbites-card" key={idx}>
            <img
              src={getDirectImageUrl(item.image)}
              alt={item.title}
              className="quickbites-img"
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

export default QuickBites;
