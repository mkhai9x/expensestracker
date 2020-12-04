import React, {useContext}from 'react';
import {GlobalContext} from '../context/GlobalState';

function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext);
  const amounts =transactions.map(transaction => transaction.amount)
  const incomes = amounts.filter(amount => amount > 0) 
  const expenses = amounts.filter(amount =>amount < 0) 

  const totalIncome = incomes.reduce((acc, item) => (acc+=item),0).toFixed(2);
  const totalExpense =expenses.reduce((acc, item) => (acc+=item), 0)*(-1).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
  <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${totalExpense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
