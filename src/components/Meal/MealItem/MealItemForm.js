import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input label="Quantity" type="number" id="quantity" />
      <button>Add to Cart</button>
    </form>
  );
};
export default MealItemForm;
