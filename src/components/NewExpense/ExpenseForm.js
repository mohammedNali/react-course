import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((userInput) => {
    //   return {
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   };
    // });
    // console.log(userInput);
  };

  const priceChangeHandler = (event) => {
    // setUserInput((userInput) => {
    //   return {
    //     ...userInput,
    //     enteredPrice: event.target.value,
    //   };
    // });
    setEnteredPrice(event.target.value);
    // console.log(userInput);
  };

  const dateChangeHandler = (event) => {
    // setUserInput((userInput) => {
    //   return {
    //     ...userInput,
    //     enteredDate: event.target.value,
    //   };
    // });
    // console.log(userInput);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");

    props.onSaveExpense(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
