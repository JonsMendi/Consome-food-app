import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [addingItem, setAddingItem] = useState([]);

  const addItemCartHandler = (item) => {
    setAddingItem((previousState) => {
      return [item, ...previousState];
    });
  };
  const removeItemCartHandler = () => {};

  const cartContext = {
    items: addingItem,
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
