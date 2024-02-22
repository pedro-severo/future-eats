import React from 'react';
import { shallow } from 'enzyme';
import ThemeUsage from '../ThemeUsage';

describe('ThemeUsage Component', () => {
    it('should test if ThemeProvider is rendered on ThemeUsage', () => {
        const wrapper = shallow(<ThemeUsage />);
        const ThemeProvider = wrapper.find('ThemeProvider');
        expect(ThemeProvider.exists()).toBeTruthy();
    });
});
