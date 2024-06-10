import React from 'react';
import { shallow } from 'enzyme';
import * as useSignupSchema from '../hooks/useSignupSchema';
import Signup from '../page';
import { yupCustomValidationsSetup } from '../../shared/services/yup';

const schemaMock = {
    password: 'password',
    email: 'email',
    cpf: 'cpf',
    passwordConfirmation: 'passwordConfirmation',
    name: 'name',
};

const mockNavigate = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: mockNavigate,
        };
    },
}));

const mockLogin = jest.fn();

// for some reason the test was broking and demanding this mock
jest.mock('@apollo/client', () => ({
    gql: jest.fn(),
    useMutation: jest.fn().mockReturnValue([mockLogin, { loading: false }]),
}));

const mockOnSubmit = jest.fn();

jest.mock('../hooks/useSignupPage', () => ({
    useSignupPage: jest.fn().mockImplementation(() => ({
        onSubmitForm: mockOnSubmit,
        control: {},
        handleSubmit: jest.fn(mockOnSubmit),
        hasLoginError: false,
        closeAlert: jest.fn(),
        alertMessage: 'OLLAAAr',
    })),
}));

describe('Signup', () => {
    let wrapper;
    beforeEach(() => {
        yupCustomValidationsSetup();
        wrapper = shallow(<Signup />);
        jest.spyOn(useSignupSchema, 'useSignupSchema').mockImplementation(
            () => {
                return {
                    schema: schemaMock,
                };
            }
        );
    });
    it('should test SignupPage rendering', () => {
        const SignupPageView = wrapper.find('SignupPageView');
        expect(SignupPageView.exists()).toBeTruthy();
    });
});
