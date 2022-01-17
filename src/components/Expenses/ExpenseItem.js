import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
<<<<<<< HEAD
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };
=======

const ExpenseItem = (props) => {

>>>>>>> 570d833a648032b2c3df0a0f3c606d3fa004a893

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
<<<<<<< HEAD
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
=======
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
>>>>>>> 570d833a648032b2c3df0a0f3c606d3fa004a893
        </Card>
    );
}

export default ExpenseItem;