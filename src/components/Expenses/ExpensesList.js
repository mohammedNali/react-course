import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.filteredExpenses.length === 0) {
    return <h1 className="white-text">No Expenses</h1>;
  }

  return (
    <ul>
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
  
};

export default ExpensesList;
