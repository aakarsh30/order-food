import { React, Suspense, lazy } from "react";
const Cart = lazy(() => import("./components/Cart.js"));
const Checkout = lazy(() => import("./components/Checkout.js"));
import Header from "./components/Header.js";
import Meals from "./components/Meals.js";
import { Provider } from "react-redux";
import store from "./store/CartContext.js";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Meals />
        <Suspense fallback={<div className="loader"></div>}>
          <Cart />
          <Checkout />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
