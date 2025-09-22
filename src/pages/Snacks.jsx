import React, { useState } from 'react';
import './Snacks.css';

const snackData = {
  'Savory Snacks': [
    {
      title: 'Potato Chips',
      image: 'https://www.pexels.com/photo/food-man-hands-sitting-4009372/',
      description: 'Crispy, salty slices of fried or baked potatoes.',
    },
    {
      title: 'Nachos',
      image: 'https://images.pexels.com/photos/6004198/pexels-photo-6004198.jpeg',
      description: 'Tortilla chips topped with cheese and savory toppings.',
    },
    {
      title: 'Popcorn',
      image: 'https://www.pexels.com/photo/white-ceramic-pitcher-with-popcorns-and-syrup-6164610/',
      description: 'Popped corn kernels, perfect for snacking.',
    },
  ],
  'Sweet Snacks': [
    {
      title: 'Chocolate Bars',
      image: 'https://www.pexels.com/photo/close-up-photo-of-assorted-chocolates-4110101/',
      description: 'Sweet and creamy chocolate bars for every craving.',
    },
    {
      title: 'Cookies',
      image: 'https://www.pexels.com/photo/selective-focus-photography-of-chocolate-cookies-1775283/',
      description: 'Crunchy or chewy, filled with chocolate chips.',
    },
    {
      title: 'Cupcakes',
      image: 'https://www.pexels.com/photo/cupcake-on-tray-3081657/',
      description: 'Mini cakes with frosting and fun decorations.',
    },
  ],
  'Healthy Snacks': [
    {
      title: 'Fresh Fruits',
      image: 'https://www.pexels.com/photo/assorted-sliced-fruits-in-white-ceramic-bowl-1092730/',
      description: 'A colorful mix of healthy, juicy fruits.',
    },
    {
      title: 'Yogurt',
      image: 'https://www.pexels.com/photo/berry-cream-dessert-414262/',
      description: 'Smooth and probiotic-rich yogurt cups.',
    },
    {
      title: 'Smoothies',
      image: 'https://www.pexels.com/photo/healthy-smoothie-in-a-jar-3679973/',
      description: 'Blended fruit drinks, packed with nutrients.',
    },
  ],
  'Protein Snacks': [
    {
      title: 'Jerky',
      image: 'https://www.pexels.com/photo/sliced-cured-meat-in-a-bowl-5237009/',
      description: 'Dried meat slices, rich in protein.',
    },
    {
      title: 'Boiled Eggs',
      image: 'https://www.pexels.com/photo/sliced-boiled-egg-on-white-plate-806457/',
      description: 'Simple and healthy protein-packed snack.',
    },
    {
      title: 'Peanut Butter',
      image: 'https://www.pexels.com/photo/clear-glass-jar-with-peanut-butter-5149346/',
      description: 'Creamy or crunchy spread full of protein.',
    },
  ],
  'Indian/Traditional Snacks': [
    {
      title: 'Samosa',
      image: 'https://www.istockphoto.com/photo/traditional-indian-deep-fried-samosa-gm1829153089-550646775',
      description: 'Prepare filling, wrap in dough, deep fry until golden.',
    },
    {
      title: 'Pakora',
      image: 'https://www.pexels.com/photo/traditional-desi-pakora-with-mint-and-green-sauces-popular-pakistani-snack-23266987/',
      description: 'Dip vegetables in gram flour batter, deep fry.',
    },
    {
      title: 'pani-puri',
      image: 'https://images.pexels.com/photos/13063303/pexels-photo-13063303.jpeg',
      description: 'Fill crisp puris with spicy potato mix, top with tangy mint water, and enjoy in one bite.',
    },
    {
      title: 'Murukku',
      image: 'https://images.pexels.com/photos/12865863/pexels-photo-12865863.jpeg',
      description: 'Crispy South Indian spiral snack.',
    },
    {
      title: 'Bhel Puri',
      image: 'https://www.pexels.com/photo/a-person-holding-food-wrapped-with-paper-10835609/',
      description: 'Puffed rice snack with vegetables and chutneys.',
    },
  ],
};

// Function to convert Pexels page URLs to direct image URLs and handle iStock/fallbacks
const getDirectImageUrl = (url, title) => {
  // Clean up formatting issues (remove parentheses, trailing spaces, etc.)
  const cleanedUrl = url.replace(/[\(\)\s]/g, '').replace(/\?$/, '').replace(/\?.*$/, '');

  // Handle empty URL (e.g., Murukku)
  if (!cleanedUrl) {
    if (title === 'Murukku') return 'https://images.pexels.com/photos/12865863/pexels-photo-12865863.jpeg';
    return 'https://via.placeholder.com/150'; // Fallback for empty URLs
  }

  // Check if the URL is already a direct Pexels image URL
  if (cleanedUrl.startsWith('https://images.pexels.com/')) {
    return cleanedUrl;
  }

  // Handle iStock links (replace with Pexels equivalents)
  if (cleanedUrl.includes('istockphoto.com')) {
    if (title === 'Samosa') return 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg';
    if (title === 'Pani puri') return 'https://images.pexels.com/photos/13063303/pexels-photo-13063303.jpeg';
    return 'https://via.placeholder.com/150'; // Fallback for other iStock links
  }

  // Convert Pexels page URL to direct image URL
  const match = cleanedUrl.match(/photo\/.*?(\d+)\/?$/);
  if (match) {
    const photoId = match[1];
    return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`;
  }

  // Fallback for invalid URLs
  return 'https://via.placeholder.com/150';
};

function Snacks() {
  const [selectedCategory, setSelectedCategory] = useState('Savory Snacks');

  return (
    <div className="snacks-container">
      <h1 className="snacks-title">Explore Delicious Snacks</h1>
      <div className="snack-buttons">
        {Object.keys(snackData).map((category) => (
          <button
            key={category}
            className={`snack-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="snack-grid">
        {snackData[selectedCategory].map((item, idx) => (
          <div className="snack-card" key={idx}>
            <img
              src={getDirectImageUrl(item.image, item.title)}
              alt={item.title}
              className="snack-img"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150')} // Fallback for broken images
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Snacks;