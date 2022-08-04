import React, { Fragment, useState } from "react";
import MealImage from "../../../assets/pexelstoaheftibaşinca.png";
import Cart from "../../Cart/Cart";
import ButtonHeader from "../../UI/ButtonHeader";
import styles from "./Header.module.css";

const Header = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = (event) => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Consommé-mé</h1>
        <ButtonHeader onClick={openModalHandler}></ButtonHeader>
      </header>
      <div className={styles["main-image"]}>
        <img src={MealImage} alt="meal representational" />
      </div>
      {openModal && <Cart onCloseModal={handleCloseModal} />}
    </Fragment>
  );
};
export default Header;
