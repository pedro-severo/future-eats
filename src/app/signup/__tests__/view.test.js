import React from 'react';
import { SignupPageView } from '../view';
import { shallow } from 'enzyme';
import { SignupForm } from '../styles';

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
    it('should render loading button', () => {
        wrapper = shallow(
            <SignupPageView
                onSubmit={mockOnSubmit}
                control={mockControl}
                isLoading={true}
            />
        );
        expect(
            wrapper.find({ 'data-testid': 'loading' }).exists()
        ).toBeTruthy();
    });
});
