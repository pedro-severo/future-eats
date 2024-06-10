import React from 'react';
import { CallToSignup } from '..';
import { shallow } from 'enzyme';

describe('CallToSignup component', () => {
    it('should render CallToSignup correctly', () => {
        const wrapper = shallow(<CallToSignup />);
        expect(wrapper.find('CallToSignupView').exists()).toBeTruthy();
    });
});
