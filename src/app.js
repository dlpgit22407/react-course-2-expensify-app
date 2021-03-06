import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

//store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
//store.dispatch(setTextFilter('water'));


//setTimeout(() => {
  //  store.dispatch(setTextFilter('bill'));
//}, 3000)

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

//console.log(store.getState());

const jsx = (
    //<AppRouter />
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

//ReactDOM.render(<p>This is my default page.</p>, document.getElementById('app'));
//ReactDOM.render(routes, document.getElementById('app'));
//ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));

//ReactDOM.render(<Layout />, document.getElementById('app'));
//ReactDOM.render((
  //  <Layout>
    //<div>
//    <h1>Page Title</h1>
  //  <p>This is my page inline.</p>
    //</div>
 //   </Layout>
//), document.getElementById('app'));

/*class OldSyntax {
    constructor() {
        this.name = 'Tim';
    }
    getGreeting() {
        return `Hello. My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

class NewSyntax {
    name = 'Lee';
    getGreeting = () => {
        return `Hello. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
//console.log(newSyntax);
console.log(newGetGreeting()); */
