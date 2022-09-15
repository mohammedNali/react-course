import './ExpenseDate.css';
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear
    const temp = props.date.toString().split(',')
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{temp[0]}</div>
      <div className='expense-date__year'>{toMonthName(temp[1])}</div>
      <div className='expense-date__day'>{temp[2]}</div>
    </div>
  );
}

// convert month number to month name
const toMonthName = (monthNumber)=> {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
    });
}


export default ExpenseDate;
