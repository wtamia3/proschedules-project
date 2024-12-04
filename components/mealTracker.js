import React, { useState, useEffect } from 'react';
import foodData from './fooddata.json'; // Import the JSON file

const MealTracker = () => {
  const [meals, setMeals] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [customMeal, setCustomMeal] = useState(null);

  useEffect(() => {
    // Initialize with predefined meals from foodData
    setMeals(foodData);
  }, []);

  const handleSelectFood = (e) => {
    const foodId = parseInt(e.target.value);
    const foodItem = foodData.find((food) => food.id === foodId);
    setCustomMeal(foodItem || null);
  };

  const handleAddMeal = () => {
    if (customMeal) {
      setMeals([...meals, { ...customMeal, id: meals.length + 1 }]);
      setCustomMeal(null); // Reset selection
    } else {
      alert('Please select a food item or enter custom details.');
    }
  };

  const calculateTotalNutrients = () => {
    return meals.reduce(
      (totals, meal) => {
        totals.calories += meal.calories;
        totals.protein += meal.protein;
        totals.carbs += meal.carbs;
        totals.fat += meal.fat;
        return totals;
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
  };

  const totals = calculateTotalNutrients();

  return (
    <div>
      <h2>Meal Tracker</h2>

      <div>
        <h3>Add a New Meal</h3>
        <label>
          Select Food:
          <select value={selectedFood} onChange={handleSelectFood}>
            <option value="">-- Select a Food --</option>
            {foodData.map((food) => (
              <option key={food.id} value={food.id}>
                {food.name} ({food.serving_size})
              </option>
            ))}
          </select>
        </label>
        <br />
        <button onClick={handleAddMeal}>Add Selected Food</button>
      </div>

      <div>
        <h3>Meal Log</h3>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              <strong>{meal.name}</strong> - {meal.calories} kcal, {meal.protein}g Protein, {meal.carbs}g Carbs, {meal.fat}g Fat
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Total Nutrients</h3>
        <p>Total Calories: {totals.calories} kcal</p>
        <p>Total Protein: {totals.protein}g</p>
        <p>Total Carbs: {totals.carbs}g</p>
        <p>Total Fat: {totals.fat}g</p>
      </div>
    </div>
  );
};

export default MealTracker;
