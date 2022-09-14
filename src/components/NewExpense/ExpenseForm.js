import "./ExpenseForm.css";
import {useState} from "react";


const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(1);
    const [date, setDate] = useState(new Intl.DateTimeFormat('en-GB', {dateStyle: 'medium'}).format(new Date));

    // add expense value in array
    const add_expense = () => {
        console.log(title);
        console.log(price);
        console.log(date)
    }

    // Clear all input in Expense Form
    const clear_expense = ()=> {
        setTitle('');
        setPrice(1);
        setDate(new Date());
    }

    return (

        <>


            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>

                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="1" step="0.1"
                           value={price} onChange={(e) => {
                        setPrice(parseFloat(e.target.value))
                    }}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2022-12-31"
                           value={date} onChange={(e) => {
                        setDate(e.target.value)
                    }}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button onClick={add_expense}>Add Expense</button>
                <button onClick={clear_expense}>Clear Expense</button>
            </div>


        </>
    );
};

export default ExpenseForm;
