import React, { useState } from 'react';
import './Vegan.css';

const veganData = {
  Breakfast: [
    {
      title: 'Poha',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/poha-recipe.jpg',
      description: 'Flattened rice cooked with onions, peanuts, and spices.',
    },
    {
      title: 'Ragi Dosa',
      image: 'https://images.pexels.com/photos/20689305/pexels-photo-20689305.jpeg',
      description: 'Crispy dosa made with finger millet flour and spices.',
    },
    {
      title: 'Sabudana Khichdi',
      image: 'https://images.pexels.com/photos/8743923/pexels-photo-8743923.jpeg',
      description: 'Tapioca pearls stir-fried with peanuts, potatoes, and spices.',
    },
  ],
  'Lunch/Dinner': [
    {
      title: 'Vegan Palak Tofu',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/palak-tofu-1.jpg',
      description: 'Spinach gravy with tofu instead of paneer.',
    },
    {
      title: 'Vegan Vegetable Kurma',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2014/06/veg-kurma-recipe-2.jpg',
      description: 'South Indian style coconut-based mixed vegetable curry.',
    },
    {
      title: 'Tinda Masala',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/04/tinda-masala-1.jpg',
      description: 'Indian round gourd curry with spices and tomato-onion base.',
    },
  ],
  Snacks: [
    {
      title: 'Makai Chivda',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/08/cornflakes-mixture-recipe-1.jpg',
      description: 'Crispy cornflakes mixture tossed with spices and peanuts.',
    },
    {
      title: 'Sprouts Salad',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/01/sprouts-salad-1.jpg',
      description: 'Healthy salad with sprouted moong, veggies, and lemon.',
    },
    {
      title: 'Kachori',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/05/moong-dal-kachori-recipe-1.jpg',
      description: 'Crispy stuffed puris with spicy lentil filling.',
    },
  ],
  Drinks: [
    {
      title: 'Aam Panna',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/05/aam-panna-recipe.jpg',
      description: 'Raw mango summer drink with mint and spices.',
    },
    {
      title: 'Masala Chaas',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/04/masala-chaas-recipe.jpg',
      description: 'Spiced buttermilk drink with ginger and coriander.',
    },
    {
      title: 'Jaljeera',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/04/jaljeera-recipe-1.jpg',
      description: 'Tangy, spicy cumin-flavored Indian summer drink.',
    },
  ],
};

const getDirectImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/150';
  return url;
};

function VeganRecipes() {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');

  return (
    <div className="vegan-container">
      <h1 className="vegan-title">Explore Indian Vegan Recipes</h1>

      {/* Category Buttons */}
      <div className="vegan-buttons">
        {Object.keys(veganData).map((category) => (
          <button
            key={category}
            className={`vegan-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="vegan-grid">
        {veganData[selectedCategory].map((item, idx) => (
          <div className="vegan-card" key={idx}>
            <img
              src={getDirectImageUrl(item.image)}
              alt={item.title}
              className="vegan-img"
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

export default VeganRecipes;
