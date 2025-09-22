import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

function Create() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const navigate = useNavigate();

  const categories = {
    veggies: [
      'Tomato', 'Onion', 'Carrot', 'Cucumber', 'Spinach', 'Lettuce', 'Broccoli', 'Cauliflower',
      'Pumpkin', 'Peas', 'Bell Pepper', 'Zucchini', 'Cabbage', 'Eggplant', 'Beans', 'Asparagus',
      'Beetroot', 'Radish', 'Sweet Potato', 'Kale'
    ],
    dairy: [
      'Milk', 'Curd', 'Paneer', 'Cheese', 'Butter', 'Cream', 'Yogurt', 'Whey', 'Ghee', 'Kefir',
      'Ricotta', 'Feta', 'Mozzarella', 'Goat Cheese', 'Cottage Cheese', 'Heavy Cream', 'Half & Half',
      'Sour Cream', 'Evaporated Milk', 'Condensed Milk'
    ],
    fruits: [
      'Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Strawberry', 'Blueberry', 'Peach',
      'Watermelon'
    ],
    essentials: [
      'Salt', 'Pepper', 'Olive Oil', 'Vinegar', 'Soy Sauce', 'Honey', 'Lemon', 'Garlic', 'Ginger', 'Mustard'
    ] 
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleCheckboxChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleGenerateRecipe = () => {
    if (selectedIngredients.length === 0) return alert("Please select ingredients!");

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('recipes') || '[]');
    const newRecipe = {
      id: Date.now(),
      title: `Recipe ${existing.length + 1}`,
      ingredients: selectedIngredients
    };
    localStorage.setItem('recipes', JSON.stringify([...existing, newRecipe]));

    // Redirect to YourRecipes
    navigate('/your-recipes');
  };

  return (
    <div className="create-page">
      <h2>Select Your Ingredients</h2>

      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="category-list">
          <h3>{activeCategory}</h3>
          <div className="category-items">
            {categories[activeCategory].map((item) => (
              <div key={item} className="item">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedIngredients.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="generate-btn" onClick={handleGenerateRecipe}>
        Generate Recipe
      </button>
    </div>
  );
}

export default Create;
