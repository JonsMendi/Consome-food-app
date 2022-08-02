import { Fragment } from "react";
import MealImage from "../../../assets/pexelstoaheftibaşinca.jpg";
import ButtonHeader from "../../UI/ButtonHeader";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Consommé-mé</h1>
        <ButtonHeader></ButtonHeader>
      </header>
      <div className={styles["main-image"]}>
        <img src={MealImage} alt="meal representational" />
      </div>
    </Fragment>
  );
};
export default Header;
