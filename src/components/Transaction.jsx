import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Transaction({ transaction }) {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const amount = Math.abs(transaction.amount)
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text} <span>{`${sign}$${amount}`}</span>
      <button onClick={()=>deleteTransaction(transaction.id)}className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;
