import React, { useContext } from "react";
import LogoImg from "../assets/logo.jpg";
import Button from "./Button.js";
import CartContext, { progressActions } from "../store/CartContext.js";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const items = useSelector((state) => state.cart.items);
  const progress = useSelector((state) => state.progress.progress);
  const cartNumber = items.reduce((number, item) => number + item.quantity, 0);
  const dispatch = useDispatch();

  function openCartHandle() {
    console.log(progress);
    dispatch(progressActions.showCart());
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} />
        <h1>Order Food</h1>
      </div>
      <nav>
        <Button onClick={openCartHandle} textOnly>
          Cart {cartNumber}
        </Button>
      </nav>
    </header>
  );
}

export default Header;
