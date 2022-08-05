import React, { useContext } from "react";
import classes from "./ButtonHeader.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const ButtonHeader = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={classes.button}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default ButtonHeader;
