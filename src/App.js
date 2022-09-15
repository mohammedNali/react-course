import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

    // get products from local storage in your browser
    const products = JSON.parse(localStorage.getItem('products') || '[]');

  return (
    <div>
      <NewExpense />
      <Expenses products={products}/>
    </div>
  );
}

export default App;
