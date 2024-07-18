import React from 'react';
import { SignupPageView } from '../view';
import { shallow } from 'enzyme';
import { SignupForm } from '../styles';

describe('SignupView', () => {
    let wrapper;
    const mockOnSubmit = jest.fn();
    const mockControl = {};
    const mockNavigateToLogin = jest.fn();
    beforeEach(() => {
        wrapper = shallow(
            <SignupPageView
                onSubmit={mockOnSubmit}
                control={mockControl}
                isLoading={false}
                navigateToLogin={mockNavigateToLogin}
            />
        );
    });
    it('should test form submit', () => {
        const signupForm = wrapper.find(SignupForm);
        signupForm.simulate('submit');
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
    it('should render save button', () => {
        expect(
            wrapper.find({ 'data-testid': 'submit-signup-button' }).exists()
        ).toBeTruthy();
    });
    it('should render goToLogin button and call onClick callback of the component', () => {
        const goToLoginButton = wrapper.find({
            'data-testid': 'go-to-login-button',
        });
        goToLoginButton.simulate('click');
        expect(mockNavigateToLogin).toBeCalled();
    });
});
