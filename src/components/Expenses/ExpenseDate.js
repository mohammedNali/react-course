import './ExpenseDate.css';

const ExpenseDate = (props) => {
    // const month = props.date.toLocaleString("en-US", {month: "long"});
    // const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    // const year = props.date.getFullYear
    let date_array = props.date.toString().split(',')



    return (
        <div className='expense-date'>
            {/* year */}
            <div className='expense-date__month'>{date_array[0]}</div>
            {/* month */}
            <div className='expense-date__year'>{toMonthName(date_array[1])}</div>
            {/* day */}
            <div className='expense-date__day'>{date_array[2]}</div>
        </div>
    );
}

// convert month number to month name
const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'short',
    });
}


export default ExpenseDate;
