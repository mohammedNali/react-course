import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.products[0].title}
        price={props.products[0].price}
        date={props.products[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.products[1].title}
        price={props.products[1].price}
        date={props.products[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.products[2].title}
        price={props.products[2].price}
        date={props.products[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.products[3].title}
        price={props.products[3].price}
        date={props.products[3].date}
      ></ExpenseItem>
    </Card>
  );
}


export default Expenses;