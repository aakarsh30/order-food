import React, { useContext, useState } from "react";
import Modal from "./Modal.js";
import CartContext from "../store/CartContext.js";
import Button from "./Button.js";
import ProgressContext from "../store/ProgressContext.js";
import { curFormat } from "../util/formatter.js";
import CartItem from "./CartItem.js";
function Cart() {
  const ctx = useContext(CartContext);
  const progressctx = useContext(ProgressContext);
  const total = ctx.items.reduce(
    (totalprice, item) => totalprice + item.price * item.quantity,
    0
  );
  console.log(progressctx.progress);
  return (
    <Modal
      className="cart"
      open={progressctx.progress === "cart"}
      onClose={
        progressctx.progress === "cart" ? () => progressctx.hideCart() : null
      }
    >
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => ctx.removeItem(item.id)}
            onIncrease={() => ctx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{curFormat.format(total)}</p>
      <p className="modal-actions">
        <Button
          onClick={() => {
            progressctx.hideCart();
          }}
          textOnly
        >
          Close
        </Button>
        {ctx.items.length > 0 && (
          <Button onClick={() => progressctx.showCheckout()}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
