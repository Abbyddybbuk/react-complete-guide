import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
// import './Expenses.css';

import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 289.98, date: new Date(2021, 11, 8) },
  { id: 'e2', title: 'Toilet Paper', amount: 2.98, date: new Date(2021, 10, 4) },
  { id: 'e3', title: 'Books', amount: 800.98, date: new Date(2021, 9, 2) },
  { id: 'e4', title: 'Personal Investment', amount: 1489.00, date: new Date(2021, 8, 1) }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
