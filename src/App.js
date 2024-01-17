import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import Header from "./components/Header.js";
import Meals from "./components/Meals.js";
import { CartContextProvider } from "./store/CartContext.js";
import { ProgressContextProvider } from "./store/ProgressContext.js";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </ProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
