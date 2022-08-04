import React from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import Meals from "./components/Meal/Meals";
import CartProvider from "./store/CartProvider";
// import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
