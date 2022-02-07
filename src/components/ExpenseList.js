import React from 'react';
import { connect } from 'react-redux';
import ExpenseListitem from './ExpenseListitem';
import selectExpenses from '../selectors/expenses'; 

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expeneses</p>
            ) : (
                props.expenses.map((expense) => {
                return <ExpenseListitem key={expense.id} {...expense} />;
            })
            )
        }
    </div>
);
 //{props.filters.text}

//const ConnectedExpenseList = connect((state) => {
const mapStoreToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        //expenses: state.expenses,
        //filters: state.filters
    };
};
//})(ExpenseList);

//export default ExpenseList;
//export default ConnectedExpenseList;
export default connect(mapStoreToProps)(ExpenseList)
