import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

Enzyme.configure({
    adapter: new Adapter()
})

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should render addexpensepage correctly', () => {
    //const onSubmit = jest.fn();
    //const history = { push: jest.fn() };
    //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
    //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot()
});

test('should handle onSubmit', () => {
    //const onSubmit = jest.fn();
    //const history = { push: jest.fn() };
    //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
});