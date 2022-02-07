import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

Enzyme.configure({
    adapter: new Adapter()
})

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})