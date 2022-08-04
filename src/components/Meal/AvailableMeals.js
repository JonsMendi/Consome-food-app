import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const EXAMPLE_MEALS = [
  {
    id: "m1",
    name: "Chicken Bones",
    description: "Gormet Bones",
    price: 102.5,
  },
  {
    id: "m2",
    name: "Lizard nails",
    description: "Nails from the finest bushes",
    price: 140.99,
  },
  {
    id: "m3",
    name: "Skunk Caviar",
    description: "Jesus...",
    price: 202.5,
  },
  {
    id: "m4",
    name: "Concrete WildBoar",
    description: "Finest cimente on the tongue",
    price: 52.5,
  },
  {
    id: "m5",
    name: "Truffle Potato",
    description: "From the wildest soil catch by snails",
    price: 502.5,
  },
];

const AvailableMeals = (props) => {
  const mealList = EXAMPLE_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card className={styles.meals}>
      <ul>{mealList}</ul>
    </Card>
  );
};
export default AvailableMeals;
