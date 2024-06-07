import React from 'react';
import { CallToSignupView } from '../view';
import { shallow } from 'enzyme';
import designSystem from '../../../../shared/designSystem';

describe('CallToSignupView component', () => {
    it('should render CallToSignupView correctly', () => {
        const wrapper = shallow(<CallToSignupView />);
        expect(wrapper.find(designSystem.typography).exists()).toBeTruthy();
    });
    it('should call action prop', () => {
        const mockAction = jest.fn();
        const wrapper = shallow(<CallToSignupView action={mockAction} />);
        wrapper.find('.call-to-action-link').simulate('click');
        expect(mockAction).toBeCalled();
    });
});
