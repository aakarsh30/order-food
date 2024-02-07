import React from "react";
import { curFormat } from "../util/formatter.js";
import Button from "./Button.js";
import { cartActions } from "../store/CartContext.js";
import { useDispatch } from "react-redux";
function MealItem({ item }) {
  const dispatch = useDispatch();

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
          <Button onClick={() => dispatch(cartActions.addItem(item))}>
            Add to cart
          </Button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
