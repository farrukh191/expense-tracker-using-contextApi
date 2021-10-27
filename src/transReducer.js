const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD": {
            return [...state, action.payload]
        }
        // case "REMOVE": {
        //     return {
        //         ...state,
        //         transactions: state.transactions
        //             .filter(transaction => transaction.id !== action.payload)
        //     }
        // }
        case "REMOVE": {
            return [
                ...state,
                action.payload.id
            ]
            
        }
        default:
            return state;
    }
})

export default TransactionReducer;