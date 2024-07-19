import React from 'react';
import { shallow } from 'enzyme';
import Login from '../page';
import * as useCustomHook from '../hooks/useLoginSchema';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockLogin = jest.fn();

// for some reason the test was broking and demanding this mock
jest.mock('@apollo/client', () => ({
    gql: jest.fn(),
    useMutation: jest.fn().mockReturnValue([mockLogin, { loading: false }]),
}));

const mockOnSubmit = jest.fn();

jest.mock('../hooks/useLoginPage', () => ({
    useLoginPage: jest.fn().mockImplementation(() => ({
        onSubmitForm: mockOnSubmit,
        control: {},
        handleSubmit: jest.fn(mockOnSubmit),
        hasLoginError: false,
        closeAlert: jest.fn(),
        alertMessage: 'OLLAAAr',
    })),
}));

describe('LoginPage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />);
        jest.spyOn(useCustomHook, 'useLoginSchema').mockImplementation(() => {
            return {
                schema: schemaMock,
            };
        });
    });
    it('should test LoginPage rendering', () => {
        const LoginPageView = wrapper.find({ 'data-testid': 'login-view' });
        expect(LoginPageView.exists()).toBeTruthy();
    });
});
