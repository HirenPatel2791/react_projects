import { createStore, combineReducers } from 'redux';

console.log(0);


//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
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

console.log(store.getState());

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