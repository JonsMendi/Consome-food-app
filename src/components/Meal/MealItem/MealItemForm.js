import { useRef, useState } from "react";
// import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  // const ctx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // Under the "+" converts the string to number.
    const enteredAmountNumber = +enteredAmount;
    // ctx.addItems(quantity);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const numberOfItems = (event) => {
    console.log("Accepting changes in quantity?", event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        onChange={numberOfItems}
      />
      <button>Add to Cart</button>
      {!amountIsValid && <p>Please entered a valid number (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
