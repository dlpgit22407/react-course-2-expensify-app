import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import { configure } from 'enzyme';

Enzyme.configure({
    adapter: new Adapter()
})

test('should render ExpenseList witgh expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList with empty expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})