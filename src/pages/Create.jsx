import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

function Create() {

  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleGenerateRecipe = async() => {
    const generateBtn = document.getElementById('generate-btn');
    const promptInput = `Give me a recipe for a dish with the following ingredients: ${selectedIngredients}`;
    const resultDiv = document.getElementById('recipe-result');

    if (selectedIngredients.length === 0) return alert("Please select ingredients!");

    setIsLoading(true);
    generateBtn.disabled = true;
    resultDiv.textContent = 'generating recipe...';

    try{
      const response = await fetch('http://localhost:8081/api/generate', { //use 3001 for expressjs
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: promptInput }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        resultDiv.textContent = data.generatedText;
    } catch(err)
    {
      console.error(err.message);
      resultDiv.textContent = 'Failed to get response from AI. Check console';
    }
    finally{
      setIsLoading(false);
      generateBtn.disabled = false;
    }

    // Save to localStorage
    // const existing = JSON.parse(localStorage.getItem('recipes') || '[]');
    // const newRecipe = {
    //   id: Date.now(),
    //   title: `Recipe ${existing.length + 1}`,
    //   ingredients: selectedIngredients
    // };
    // localStorage.setItem('recipes', JSON.stringify([...existing, newRecipe]));

    // Redirect to YourRecipes
    // navigate('/your-recipes');
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

      <div id='recipe-result' className='recipe-result'></div>

      <button id='generate-btn' className="generate-btn" onClick={handleGenerateRecipe}>
         {isLoading ? 'Loading...' : 'Generate'}
      </button>
    </div>
  );
}

export default Create;
