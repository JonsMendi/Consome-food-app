import React, { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import Meals from "./components/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
