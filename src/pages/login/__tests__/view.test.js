import React from 'react';
import { LoginPageView } from '../view';
import { shallow } from 'enzyme';
import { LoginForm } from '../styles';

const mockUsedNavigate = jest.fn();

jest.mock('../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => ({ handleGoToRegisterPage: mockUsedNavigate }),
}));

describe('LoginPageView', () => {
    let wrapper;
    const mockSetShowPassword = jest.fn();
    const mockOnSubmit = jest.fn();
    const mockControl = {};
    beforeEach(() => {
        wrapper = shallow(
            <LoginPageView onSubmit={mockOnSubmit} control={mockControl} />
        );
        jest.spyOn(React, 'useState').mockImplementation(() => [
            false,
            mockSetShowPassword,
        ]);
    });

    it('should test LoginPageView rendering', () => {
        expect(wrapper.exists()).toBeTruthy();
    });
    it('should test form submit', () => {
        const loginForm = wrapper.find(LoginForm);
        loginForm.simulate('submit');
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
});
