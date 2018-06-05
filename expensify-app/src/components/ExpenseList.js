import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

//NOTE: how to connect redux store with react component
// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses : state.expenses
//     };
// })(ExpenseList);


// export default ConnectedExpenseList;

const mapStateToProps = (state) => {
    return {
        expenses : state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);