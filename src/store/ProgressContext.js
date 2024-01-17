import { createContext, useState } from "react";

const ProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function ProgressContextProvider({ children }) {
  const [Userprogress, setprogress] = useState("");

  function showCart() {
    setprogress("cart");
  }
  function hideCart() {
    setprogress("");
  }
  function showCheckout() {
    setprogress("checkout");
  }
  function hideCheckout() {
    setprogress("");
  }

  const progressctx = {
    progress: Userprogress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <ProgressContext.Provider value={progressctx}>
      {children}
    </ProgressContext.Provider>
  );
}
export default ProgressContext;
