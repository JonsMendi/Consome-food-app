import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealtItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$ ${props.price}`}</div>
      </div>
      <MealItemForm />
    </li>
  );
};
export default MealtItem;