import React, { useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Instead of setting state for individual fields, you can actually
    // set state for the form fields together as shown below
    // const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: '',
    // });
   
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,//This means that with change of value of Entered Title you do not want to override entered
        //                  // values of Amount and Date
        //     enteredTitle: event.target.value,
        // });
        //You should not use the syntax above as the above syntax may cause inconsistency state issues
        //In reactjs, state is not changed immediately when you are setting one instead it is set to change later
        //Therefore, above syntax (at line ...userInput) may be working with older state.
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value};
        // });

       setEnteredTitle(event.target.value);       
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });        
        setEnteredAmount(event.target.value);
    }

    const amountDateHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });         
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };

    // With Button as type "Submit"....form is considered as a whole and form provides onSubmit event
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label> 
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={amountDateHandler}/>
            </div>            
        </div>

        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>

    </form>
};

export default ExpenseForm;