import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITAL_EXPENSES = [
  {
    id: "e1",
    title: "BMW Car",
    price: 20000,
    date: new Date(2022, 8, 14),
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
    date: new Date(2022, 9, 10),
  },
  {
    id: "e4",
    title: "Hyundai Car",
    price: 20000,
    date: new Date(2022, 11, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevState) => [expense, ...prevState]);
  };

  let _fontSize = 100 + 'px';

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses products={expenses} />
    </div>
  );
};

export default App;
