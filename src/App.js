import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
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
        <Cart />
        <Checkout />
      </Provider>
    </>
  );
}

export default App;
