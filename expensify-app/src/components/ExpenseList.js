import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p> No Expenses </p>
            ) : (
                props.expenses.map((expense) =>   {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )
        }
       
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
        expenses : selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);