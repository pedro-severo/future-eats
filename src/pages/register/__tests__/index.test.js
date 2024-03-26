import React from 'react';
import { shallow } from 'enzyme';
import * as useRegisterSchema from '../hooks/useRegisterSchema';
import { RegisterPage } from '..';
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
    usePagesNavigation: () => ({ handleGoToRegisterPage: mockUsedNavigate }),
}));

const mockLogin = jest.fn();

// for some reason the test was broking and demanding this mock
jest.mock('@apollo/client', () => ({
    gql: jest.fn(),
    useMutation: jest.fn().mockReturnValue([mockLogin, { loading: false }]),
}));

const mockOnSubmit = jest.fn();

jest.mock('../hooks/useRegisterPage', () => ({
    useRegisterPage: jest.fn().mockImplementation(() => ({
        onSubmitForm: mockOnSubmit,
        control: {},
        handleSubmit: jest.fn(mockOnSubmit),
        hasLoginError: false,
        closeAlert: jest.fn(),
        alertMessage: 'OLLAAAr',
    })),
}));

describe('RegisterPage', () => {
    let wrapper;
    beforeEach(() => {
        yupCustomValidationsSetup();
        wrapper = shallow(<RegisterPage />);
        jest.spyOn(useRegisterSchema, 'useRegisterSchema').mockImplementation(
            () => {
                return {
                    schema: schemaMock,
                };
            }
        );
    });
    it('should test RegisterPage rendering', () => {
        const RegisterPageView = wrapper.find('RegisterPageView');
        expect(RegisterPageView.exists()).toBeTruthy();
    });
});
