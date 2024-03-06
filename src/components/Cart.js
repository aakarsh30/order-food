import React, { useMemo } from "react";
import Modal from "./Modal.js";
import CartContext, {
  cartActions,
  progressActions,
} from "../store/CartContext.js";
import Button from "./Button.js";
import { curFormat } from "../util/formatter.js";
import CartItem from "./CartItem.js";
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress.progress);
  const total = useMemo(
    () =>
      items.reduce(
        (totalprice, item) => totalprice + item.price * item.quantity,
        0
      ),
    [items]
  );
  console.log(progress);
  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={
        progress === "cart" ? () => dispatch(progressActions.hideCart()) : null
      }
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => dispatch(cartActions.removeItem(item.id))}
            onIncrease={() => dispatch(cartActions.addItem(item))}
          />
        ))}
      </ul>
      <p className="cart-total">{curFormat.format(total)}</p>
      <p className="modal-actions">
        <Button
          onClick={() => {
            dispatch(progressActions.hideCart());
          }}
          textOnly
        >
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={() => dispatch(progressActions.showCheckout())}>
            Checkout
          </Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
