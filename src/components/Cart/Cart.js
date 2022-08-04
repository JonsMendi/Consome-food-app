import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "z1", name: "Pizza", amount: 2, price: 12.44 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.56</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCloseModal} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
