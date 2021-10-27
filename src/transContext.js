import React,{ createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const  Inittransaction = [
    {amount:500, desc:'Cash'},
    {amount:-350, desc:'Book'},
    {amount:-10, desc:'Watch'}
];

export const TransactionContext = createContext(Inittransaction);

export const TransactionProvider = ({children}) =>{
    let[state, dispatch] = useReducer(TransactionReducer, Inittransaction);
    function addTransaction(transobj){
        dispatch({
            type:"ADD",
            payload: {
                amount: transobj.amount,
                desc: transobj.desc
            },
        })
    }
    // function removeTransaction(transid){
    //     dispatch({
    //         type:"REMOVE",
    //         payload : transid
    //     })
    // }

      // Delete Existing Transaction Action
      function removeTransaction(id) {
        dispatch({
            type: 'REMOVE',
            payload: id
        });
    }
    return(
        <TransactionContext.Provider value={{transaction: state, addTransaction,removeTransaction}} >
            {children}
        </TransactionContext.Provider>
    )
}