import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, mount, render } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
import Enzyme from 'enzyme';
import { configure } from 'enzyme';

Enzyme.configure({
    adapter: new Adapter()
})

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
