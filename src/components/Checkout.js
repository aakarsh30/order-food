import React, { useContext, useState } from "react";
import Modal from "./Modal.js";
import { curFormat } from "../util/formatter.js";
import CartContext, { progressActions } from "../store/CartContext.js";
import Input from "./Input.js";
import Button from "./Button.js";
import { useDispatch, useSelector } from "react-redux";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const progress = useSelector((state) => state.progress.progress);
  const dispatch = useDispatch();
  const total = items.reduce(
    (amnt, item) => amnt + item.price * item.quantity,
    0
  );
  console.log(progress);
  return (
    <Modal open={progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {curFormat.format(total)}</p>
        <Input label="Full Name" id="full-name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button
            onClick={() => dispatch(progressActions.hideCheckout())}
            textOnly
            type="button"
          >
            Close
          </Button>
          <Button>Place Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
