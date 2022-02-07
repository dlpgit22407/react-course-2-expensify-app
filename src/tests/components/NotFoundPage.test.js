import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

Enzyme.configure({
    adapter: new Adapter()
})

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})
