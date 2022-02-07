import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
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
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = (date = '') => ({
    type: 'SORT_BY_DATE',
    date
});

const sortByAmount = (amount = '') => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) =>  id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                return expense;
                };
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };   
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

//const getVisibleExpenses = (expenses, filterts) => {
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//const store = createStore(expensesReducer);
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
);

/*const filterstore = createStore(
    combineReducers({
        filter: filtersReducer
    })
);*/

console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    //console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -311000}));

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('e'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(-2125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        descriptions: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

/*const user = {
    name: 'Lee',
    age: 24
};

console.log({
    ...user,
    location: 'Virginia',
    age: 27
});*/
