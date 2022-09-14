import "./ExpenseForm.css";
import {useState} from "react";



const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.1);
    const [date, setDate] = useState(new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium'}).format(new Date));


    return (

    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="1" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
