import React from 'react';
import { Header } from '..';
import { mount, shallow } from 'enzyme';

describe('Header Component', () => {
    it('should test if HeaderView is rendered on Header', () => {
        const wrapper = mount(<Header />);
        const HeaderView = wrapper.find('HeaderView');
        expect(HeaderView.exists()).toBeTruthy();
    });
    it('should test if Suspense is rendered with LazyHeaderLoading', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('Suspense').exists()).toBeTruthy();
    });
});
