import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';

const ExpenseListitem = ({ dispatch, description, id, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>      
    </div>
);

export default ExpenseListitem
//export default connect()(ExpenseListitem);
