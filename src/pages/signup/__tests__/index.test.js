import React from 'react';
import { shallow } from 'enzyme';
import * as useSignupSchema from '../hooks/useSignupSchema';
import { SignupPage } from '..';
import { yupCustomValidationsSetup } from '../../../services/yup';

const schemaMock = {
    password: 'password',
    email: 'email',
    cpf: 'cpf',
    passwordConfirmation: 'passwordConfirmation',
    name: 'name',
};

const mockUsedNavigate = jest.fn();

jest.mock('../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => ({ handleGoToSignupPage: mockUsedNavigate }),
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
        wrapper = shallow(<SignupPage />);
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
