import React, { useState } from 'react';
import './Meals.css'; // Separate CSS for Meals

const mealData = {
  'Lunch/Dinner': [
    {
      title: 'Biryani',
      image: 'https://images.pexels.com/photos/4910320/pexels-photo-4910320.jpeg',
      description: 'Spiced rice dish with chicken/mutton/vegetables.',
    },
    {
      title: 'Dal Tadka',
      image: 'https://images.pexels.com/photos/4595313/pexels-photo-4595313.jpeg',
      description: 'Yellow lentils cooked with tempered spices.',
    },
    {
      title: 'Paneer Butter Masala',
      image: 'https://images.pexels.com/photos/12737805/pexels-photo-12737805.jpeg',
      description: 'Creamy curry with cottage cheese and spices.',
    },
    {
      title: 'Chicken Curry',
      image: 'https://images.pexels.com/photos/9567078/pexels-photo-9567078.jpeg',
      description: 'Rich and flavorful Indian chicken curry.',
    },
    {
      title: 'Rajma Chawal',
      image: 'https://images.pexels.com/photos/12737912/pexels-photo-12737912.jpeg',
      description: 'Red kidney beans curry with steamed rice.',
    },
  ],
  'Thali Meals': [
    {
      title: ' north Thali',
      image: 'https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg',
      description: 'A big plate with rice, roti, dal, curries, raita, and dessert.',
    },
    { title: 'south Thali',
      image: 'https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg',
      description: 'A big plate with rice, roti, dal, curries, raita, and dessert.',
    },
  ],
  'South Indian': [
    {
      title: 'Tamarind Rice (Puliyodarai)',
      image: 'https://images.pexels.com/photos/4595312/pexels-photo-4595312.jpeg',
      description: 'tangy tamarind paste mixed with rice, tempered with curry leaves, dried red chilies, and peanuts..',
    },
    {
      title: 'Vegetable Pulao',
      image: 'https://images.pexels.com/photos/7593267/pexels-photo-7593267.jpeg',
      description: 'Aromatic rice cooked with vegetables.',
    },
    {
      title: 'Curd Rice',
      image: 'https://images.pexels.com/photos/29684991/pexels-photo-29684991.jpeg',
      description: 'Spicy curd mix with rice and some pop and chills .',
    },
  ],
};

// Fallback for broken images
const getDirectImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/150';
  return url;
};

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState('Lunch/Dinner');

  return (
    <div className="meals-container">
      <h1 className="meals-title">Explore Delicious Indian Meals</h1>

      {/* Category Buttons */}
      <div className="meals-buttons">
        {Object.keys(mealData).map((category) => (
          <button
            key={category}
            className={`meals-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Meals Grid */}
      <div className="meals-grid">
        {mealData[selectedCategory].map((item, idx) => (
          <div className="meals-card" key={idx}>
            <img
              src={getDirectImageUrl(item.image)}
              alt={item.title}
              className="meals-img"
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

export default Meals;
