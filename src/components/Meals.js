import React, { useEffect, useState } from "react";
import MealItem from "./MealItem.js";

function Meals() {
  const [loadMeals, setloadMeals] = useState([]);
  const [loader, setloader] = useState(true);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://backend-hazel-kappa.vercel.app/meals"
      );
      if (!response.ok) {
        console.log("Wrong");
      }
      const meals = await response.json();
      setloadMeals(meals);
      setloader(false);
    }
    fetchMeals();
  }, []);

  return (
    <>
      {loader && <div className="loader"></div>}
      <ul id="meals">
        {loadMeals.map((meal) => {
          return <MealItem item={meal} key={meal.id} />;
        })}
      </ul>
    </>
  );
}

export default Meals;
