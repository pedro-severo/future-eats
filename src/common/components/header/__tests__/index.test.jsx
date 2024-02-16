import React from 'react';
import { Header } from '..';
import { shallow } from 'enzyme';

describe('Header Component', () => {
    it('should test if HeaderView is rendered on Header', () => {
        const wrapper = shallow(<Header />);
        const HeaderView = wrapper.find('HeaderView');
        expect(HeaderView.exists()).toBeTruthy();
    });
});
