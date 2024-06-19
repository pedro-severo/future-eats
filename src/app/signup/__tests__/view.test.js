import React from 'react';
import { SignupPageView } from '../view';
import { shallow } from 'enzyme';
import { SignupForm } from '../styles';
import PATH from '../../shared/constants/pathsEnum';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

describe('SignupView', () => {
    let wrapper;
    const mockSetShowPassword = jest.fn();
    const mockSetShowPasswordConfirmation = jest.fn();
    const mockOnSubmit = jest.fn();
    const mockControl = {};
    beforeEach(() => {
        wrapper = shallow(
            <SignupPageView
                onSubmit={mockOnSubmit}
                control={mockControl}
                isLoading={false}
            />
        );
        jest.spyOn(React, 'useState').mockImplementation(() => [
            false,
            mockSetShowPassword,
        ]);
        jest.spyOn(React, 'useState').mockImplementation(() => [
            false,
            mockSetShowPasswordConfirmation,
        ]);
    });

    it('should test SignupView rendering', () => {
        expect(wrapper.exists()).toBeTruthy();
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
        expect(goToLoginButton.exists()).toBeTruthy();
        expect(mockPush).toBeCalledWith(PATH.LOGIN);
    });
});
