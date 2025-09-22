import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Cuisines.css';

const cuisineData = [
  {
    cuisine: 'Indian',
    subcategories: [
      {
        region: 'North',
        dishes: [
          {
            name: 'Paneer Butter Masala',
            image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
            recipe: 'Rich tomato gravy with chunks of soft paneer.'
          },
          {
            name: 'Aloo Paratha',
            image: 'https://images.pexels.com/photos/26935982/pexels-photo-26935982.jpeg',
            recipe: 'Stuffed potato parathas with ghee and yogurt.'
          }
        ]
      },
      {
        region: 'South',
        dishes: [
          {
            name: 'Masala Dosa',
            image: 'https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg',
            recipe: 'Crispy rice crepe with spicy potato filling.'
          },
          {
            name: 'Idli Sambar',
            image: 'https://images.pexels.com/photos/31199041/pexels-photo-31199041.jpeg',
            recipe: 'Soft idlis served with spicy lentil soup.'
          }
        ]
      }
    ]
  },
  {
    cuisine: 'Italian',
    subcategories: [
      {
        region: '',
        dishes: [
          {
            name: 'Margherita Pizza',
            image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
            recipe: 'Tomato, mozzarella, basil—simple and classic!'
          },
          {
            name: 'Spaghetti Carbonara',
            image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
            recipe: 'Pasta with egg, cheese, and pancetta.'
          }
        ]
      }
    ]
  },
  {
    cuisine: 'Chinese',
    subcategories: [
      {
        region: '',
        dishes: [
          {
            name: 'Kung Pao Chicken',
            image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
            recipe: 'Chicken, peanuts, and chili stir-fried.'
          },
          {
            name: 'Vegetable Fried Rice',
            image: 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg',
            recipe: 'Fluffy rice tossed with fresh veggies.'
          }
        ]
      }
    ]
  },
  {
    cuisine: 'Mexican',
    subcategories: [
      {
        region: '',
        dishes: [
          {
            name: 'Tacos',
            image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
            recipe: 'Crunchy shells filled with spiced veggies or meat.'
          },
          {
            name: 'Quesadillas',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
            recipe: 'Cheese-filled tortillas grilled to perfection.'
          }
        ]
      }
    ]
  }
];

const Cuisines = () => {
  const [activeCuisine, setActiveCuisine] = useState(null);
  const location = useLocation();
  const searchTerm = location.state?.search || '';
  const dishRefs = useRef({});

  const toggleCuisine = (cuisine) => {
    setActiveCuisine(prev => (prev === cuisine ? null : cuisine));
  };

  useEffect(() => {
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      let found = false;

      cuisineData.forEach(cuisine => {
        cuisine.subcategories.forEach(sub => {
          sub.dishes.forEach(dish => {
            if (dish.name.toLowerCase().includes(lower)) {
              found = true;
              setActiveCuisine(cuisine.cuisine);

              setTimeout(() => {
                const dishEl = dishRefs.current[dish.name];
                if (dishEl) {
                  dishEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  dishEl.classList.add('highlight');

                  setTimeout(() => {
                    dishEl.classList.remove('highlight');
                  }, 2000);
                }
              }, 300);
            }
          });
        });
      });

      if (!found) {
        alert('Recipe not found. Please try another one!');
      }
    }
  }, [searchTerm]);

  return (
    <div className="cuisine-page">
      <h1 className="cuisine-title">Explore Global Cuisines 🍱</h1>

      <div className="cuisine-button-grid">
        {cuisineData.map((item, idx) => (
          <button
            key={idx}
            className={`cuisine-btn ${activeCuisine === item.cuisine ? 'active' : ''}`}
            onClick={() => toggleCuisine(item.cuisine)}
          >
            {item.cuisine}
          </button>
        ))}
      </div>

      {cuisineData.map((item, idx) => (
        activeCuisine === item.cuisine && (
          <div key={idx} className="cuisine-section">
            {item.subcategories.map((sub, sIdx) => (
              <div key={sIdx}>
                {sub.region && <h2>{item.cuisine} - {sub.region}</h2>}
                <div className="cuisine-grid">
                  {sub.dishes.map((dish, dIdx) => (
                    <div
                      key={dIdx}
                      className="cuisine-card"
                      ref={el => dishRefs.current[dish.name] = el}
                    >
                      <img src={dish.image} alt={dish.name} className="cuisine-img" />
                      <h3>{dish.name}</h3>
                      <p>{dish.recipe}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      ))}
    </div>
  );
};

export default Cuisines;
