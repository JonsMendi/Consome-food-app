import React, { useContext, useState, useEffect } from "react";
import classes from "./ButtonHeader.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const ButtonHeader = (props) => {
  const [bumping, setBumping] = useState(false);
  const ctx = useContext(CartContext);

  //destructuring the CartContext
  const { items } = ctx;

  //to add more more items in the cart.
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartBumpingClass = `${classes.button} ${bumping ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumping(true);

    const bumpTimer = setTimeout(() => {
      setBumping(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={cartBumpingClass}
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
