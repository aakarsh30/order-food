import React from "react";
import { curFormat } from "../util/formatter.js";
import Button from "./Button.js";
import { useContext } from "react";
import CartContext from "../store/CartContext.js";
function MealItem({ item }) {
  const ctx = useContext(CartContext);
  function addItem() {
    ctx.addItem(item);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:8080/${item.image}`} />
        <div>
          <h3>{item.name}</h3>
          <p className="meal-item-price">{curFormat.format(item.price)}</p>
          <p className="meal-item-description">{item.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={addItem}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
