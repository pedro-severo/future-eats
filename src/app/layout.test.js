import React from 'react';
import RootLayout from './layout';
import { shallow } from 'enzyme';

describe('RootLayout', () => {
    it('should ensure that Router is rendered', () => {
        const wrapper = shallow(<RootLayout />);
        const RouterComponent = wrapper.find('body');
        expect(RouterComponent.exists()).toBe(true);
    });
});
