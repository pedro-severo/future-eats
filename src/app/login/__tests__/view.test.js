import React from 'react';
import { LoginPageView } from '../view';
import { shallow } from 'enzyme';
import { LoginForm } from '../styles';
import designSystem from '../../shared/designSystem';

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: jest.fn(),
        };
    },
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
    it('should render Alert component', () => {
        wrapper = shallow(
            <LoginPageView
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
});
