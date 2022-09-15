import "./ExpenseForm.css";
import {useState} from "react";

let counter = 1;

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(1);
    let [date, setDate] = useState(new Date().toDateString());
    const [products, setProduct] = useState(JSON.parse(localStorage.getItem('products') || '[]'));

    // convert date to array
    date = date.toString().split('-')

    // add expense value in array
    const add_expense = () => {
        const temp = {
            id: counter += 1,
            title: title,
            price: price,
            date: date,
        }

        products.push(temp);
        setProduct(products);
        localStorage.setItem('products', JSON.stringify(products));
        clear_expense();
    }

    // Clear all input in Expense Form
    const clear_expense = () => {
        setTitle('');
        setPrice(1);
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
                           onChange={(e) => {
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

export {ExpenseForm};
