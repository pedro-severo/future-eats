import React from 'react';
import { RegisterPageView } from './view';
import { shallow } from 'enzyme';
import { RegisterForm } from './styles';

describe('RegisterView', () => {
    let wrapper;
    const mockSetShowPassword = jest.fn();
    const mockSetShowPasswordConfirmation = jest.fn();
    const mockOnSubmit = jest.fn();
    const mockControl = {};
    beforeEach(() => {
        wrapper = shallow(
            <RegisterPageView onSubmit={mockOnSubmit} control={mockControl} />
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

    it('should test RegisterView rendering', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    it('should test form submit', () => {
        const registerForm = wrapper.find(RegisterForm);
        registerForm.simulate('submit');
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
});
