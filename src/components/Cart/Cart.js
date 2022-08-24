import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //Under we import the totalAmount from cart-context.js to output the total result.
  const cartTotalAmount = cartCtx.totalAmount;

  //to just show the "Order" button in case that we have items we create this logic.
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    // under, using the useContext we add a new item every time we click.
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // bind() built in function pre-configures a function for future execution.
          // in this case allows to pre-configure the argument that the function will receive when it will be executed.
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCloseModal} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
