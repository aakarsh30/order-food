import React, { useContext } from "react";
import LogoImg from "../assets/logo.jpg";
import Button from "./Button.js";
import CartContext from "../store/CartContext.js";
import ProgressContext from "../store/ProgressContext.js";
function Header() {
  const ctx = useContext(CartContext);
  const progressctx = useContext(ProgressContext);
  const cartNumber = ctx.items.reduce(
    (number, item) => number + item.quantity,
    0
  );

  function openCartHandle() {
    console.log(progressctx.progress);
    progressctx.showCart();
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
