import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log("Printed from NewExpense.js file ", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <h2>Add New Expense</h2>
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
