import styles from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <div className={styles.summary}>
      <h2>"Consommé or Consommé?"</h2>
      <p>We are Consommé, we consume!</p>
      <p>
        Don't miss our Monday to Friday promotions, pay the triple for half
        portion!
      </p>
      <p>Spend your fortune with us.</p>
    </div>
  );
};
export default MealsSummary;
