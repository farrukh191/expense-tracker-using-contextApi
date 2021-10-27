import React, { useContext, useState } from 'react';
import './App.css'
import { TransactionContext } from './transContext';

const Child = () => {

    const { transaction, addTransaction, removeTransaction} = useContext(TransactionContext);
    const [amount, setamount] = useState('');
    const [desc, setdesc] = useState('');
    const handleAddition = (e) => {
        e.preventDefault();
        console.log(amount, desc);
        addTransaction({
            amount: Number(amount),
            desc: desc
        })
    }
    console.log(transaction.length);
    // const idd = (id) => {
    //     removeTransaction({
    //         id
    //     })
       
       
    // }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0)
                income += transaction[i].amount

        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0)
                expense += transaction[i].amount

        }
        return expense;

    }




    // let transaction = [
    //     {amount:500, desc:'Cash'},
    //     {amount:-30, desc:'Book'},
    //     {amount:-10, desc:'Watch'}
    // ];
    return (
        <>
            <div className="container">
                <h2 className="text-center">Expense Tracker</h2>
                <h4>Your Balance <br />{getIncome() + getExpense()}</h4>
                <div className="expense-container">
                    <h4>INCOME <br /> {getIncome()}</h4>
                    <h4>EXPENSE <br /> {getExpense()}</h4>
                </div>
                <h4>History</h4>
                <h5>{transaction.length}</h5>
                <hr />
                <h4>Add new transaction</h4>
                <hr />
                <ul className="transaction-list">
                    {transaction.map((tranc, id) => {
                        return (
                            <li key={id}>
                                <span>{tranc.desc}</span>
                                <span>{tranc.amount}</span>
                                <span>
                                    <button onClick={() => removeTransaction(id)}>Del</button>
                                </span>
                            </li>
                        )
                    })}
                </ul>
                <form className="transaction-form" onSubmit={handleAddition}>
                    <label>
                        Enter Description <br />
                        <input type='text' value={desc} onChange={(ev) => setdesc(ev.target.value)} />
                    </label>
                    <label>
                        Enter Amount <br />
                        <input type='number' value={amount} onChange={(ev) => setamount(ev.target.value)} />
                    </label>
                    <input type="submit" value="Add Transaction" />
                </form>
            </div>
        </>
    );
}

export default Child;