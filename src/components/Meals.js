import React, { useEffect, useState } from "react";
import MealItem from "./MealItem.js";

function Meals() {
  const [loadMeals, setloadMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:8080/meals");
      if (!response.ok) {
        console.log("Wrong");
      }
      const meals = await response.json();
      setloadMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => {
        return <MealItem item={meal} key={meal.id} />;
      })}
    </ul>
  );
}

export default Meals;
