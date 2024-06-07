import React from 'react';
import RootLayout from './layout';
import { shallow } from 'enzyme';

describe('RootLayout', () => {
    it('should render RootLayout once', () => {
        const wrapper = shallow(<RootLayout />);
        const RouterComponent = wrapper.find('body');
        expect(RouterComponent.exists()).toBe(true);
    });
});
