import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE action generator
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount =0, 
        createdAt=0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = (
    { 
        id 
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducers = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

//store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers
    })
);

store.subscribe(()=> {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300}));

store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

const demoState = {
    expenses: [{
        id: 'adfadfadfa',
        description: 'Jan rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};