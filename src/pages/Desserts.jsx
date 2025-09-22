import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Desserts.css';

const dessertData = [
  {
    name: 'Chocolate Lava Cake',
    image: '/assets/desserts.jpg',
    quickSteps: 'Microwave dark chocolate + butter, add flour + eggs. Bake till gooey!',
  },
  {
    name: 'Strawberry Parfait',
    image: 'https://images.pexels.com/photos/8805099/pexels-photo-8805099.jpeg',
    quickSteps: 'Layer yogurt, granola, and strawberries in a glass. Chill and serve!',
  },
  {
    name: 'Oreo Mug Cake',
    image: 'https://images.pexels.com/photos/1700859/pexels-photo-1700859.jpeg',
    quickSteps: 'Crush Oreos + milk in a mug, microwave for 2 mins. Done!',
  },
  {
    name: 'Fruit Custard',
    image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg',
    quickSteps: 'Boil milk, add custard powder, chill. Top with fruits!',
  },
  {
    name: 'Coconut Ladoo',
    image: 'https://images.pexels.com/photos/7133657/pexels-photo-7133657.jpeg',
    quickSteps: 'Roast coconut + condensed milk. Roll into balls, chill!',
  },
];

const Desserts = () => {
  const location = useLocation();
  const externalSearch = location.state?.search || '';
  const [searchTerm, setSearchTerm] = useState(externalSearch);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const matchIndex = dessertData.findIndex(d =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchIndex !== -1 && cardRefs.current[matchIndex]) {
      cardRefs.current[matchIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardRefs.current[matchIndex].classList.add('highlight');

      const timer = setTimeout(() => {
        cardRefs.current[matchIndex]?.classList.remove('highlight');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  return (
    <div className="dessert-page">
      <h1 className="dessert-title">Top Easy Desserts 🍩</h1>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search Dessert..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="dessert-grid">
        {dessertData.map((dessert, index) => {
          const isMatch = searchTerm && dessert.name.toLowerCase().includes(searchTerm.toLowerCase());
          return (
            <div
              key={index}
              className={`dessert-card ${isMatch ? 'highlight' : ''}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <img src={dessert.image} alt={dessert.name} className="dessert-img" />
              <h3>{dessert.name}</h3>
              <p>{dessert.quickSteps}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Desserts;
