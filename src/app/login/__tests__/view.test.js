import React from 'react';
import { LoginView } from '../view';
import { shallow } from 'enzyme';
import { LoginForm } from '../styles';
import designSystem from '../../shared/designSystem';
import { CallToSignup } from '../components/callToSignup';

describe('LoginPageView', () => {
    let wrapper;
    const mockOnSubmit = jest.fn();
    const mockControl = {};
    const mockNavigateToSignup = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(
            <LoginView
                onSubmit={mockOnSubmit}
                control={mockControl}
                isLoading={false}
                navigateToSignup={mockNavigateToSignup}
            />
        );
    });

    it('should test LoginPageView rendering', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    it('should test form submit', () => {
        const loginForm = wrapper.find(LoginForm);
        loginForm.simulate('submit');
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
    it('should call CallToSignup action with the correct parameter', () => {
        const callToSignup = wrapper.find(CallToSignup);
        callToSignup.props().action();
        expect(mockNavigateToSignup).toBeCalled();
    });
    it('should render Alert component', () => {
        wrapper = shallow(
            <LoginView
                onSubmit={mockOnSubmit}
                control={mockControl}
                hasLoginError={true}
                alertMessage="oloco meu, ta pegando fogo"
            />
        );
        const alertComponent = wrapper.find(designSystem.alert);
        expect(alertComponent.props().message).toBe(
            'oloco meu, ta pegando fogo'
        );
        expect(alertComponent.props().isOpen).toBe(true);
        expect(alertComponent.props().severity).toBe('error');
    });
    it('should render enter button', () => {
        expect(
            wrapper.find({ 'data-testid': 'submit-login-button' }).exists()
        ).toBeTruthy();
    });
});
