import "./ExpenseForm.css";
import {useState} from "react";

const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

const ExpenseForm = () => {
    let counter = 1;
    const date = longEnUSFormatter.format(new Date());
    const [title_temp, setTitle] = useState('');
    const [price_temp, setPrice] = useState(1);
    const [date_temp, setDate] = useState(date);
    const [products, setProduct] = useState(JSON.parse(localStorage.getItem('products') || '[]'));


    console.log(date_temp)


    // add expense value in array
    const add_expense = () => {
        const temp = {
            id: counter++,
            title: title_temp,
            price: price_temp,
            date: date_temp,
        }
        products.push(temp);
        setProduct(products);
        localStorage.setItem('products', JSON.stringify(products));
        clear_expense();
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
                    <input type="text" value={title_temp} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>

                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="1" step="0.1"
                           value={price_temp} onChange={(e) => {
                        setPrice(parseFloat(e.target.value))
                    }}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2022-12-31"
                           value={date_temp} onChange={(e) => {
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
