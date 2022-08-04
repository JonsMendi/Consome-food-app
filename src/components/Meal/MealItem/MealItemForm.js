import { useState } from "react";
// import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [quantity, setQuantity] = useState("");
  // const ctx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("SubmitHandler?", quantity);
    // ctx.addItems(quantity);
  };

  const numberOfItems = (event) => {
    console.log("Accepting changes in quantity?", event.target.value);
    setQuantity(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
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
    </form>
  );
};
export default MealItemForm;
