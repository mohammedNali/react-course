import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const products = [
    {
      id: "e1",
      title: "BMW Car",
      price: 20000,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Audi Car",
      price: 20000,
      date: new Date(2022, 8, 2),
    },
    {
      id: "e3",
      title: "Tesla Car",
      price: 20000,
      date: new Date(2022, 9, 20),
    },
    {
      id: "e4",
      title: "Hyundai Car",
      price: 20000,
      date: new Date(2022, 12, 12),
    },
  ];


  return (
    <div>
      <NewExpense />
      <Expenses products={products}/>
    </div>
  );
}

export default App;
