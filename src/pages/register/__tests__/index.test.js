import React from 'react';
import { shallow } from 'enzyme';
import * as useCustomHook from '../hooks/useRegisterSchema';
import { RegisterPage } from '..';

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

describe('RegisterPage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RegisterPage />);
        jest.spyOn(useCustomHook, 'useRegisterSchema').mockImplementation(
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
