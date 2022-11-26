import React, { createContext, useReducer } from "react";

import cartReducer, { initialState } from "./cartReducer";

export const cart = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>;
};

export default CartContext;
