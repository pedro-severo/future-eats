import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '..';
import * as useCustomHook from '../hooks/useLoginSchema';

const schemaMock = {
    password: 'password',
    email: 'email',
};

const mockUsedNavigate = jest.fn();

jest.mock('../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => ({ handleGoToRegisterPage: mockUsedNavigate }),
}));

describe('LoginPage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<LoginPage />);
        jest.spyOn(useCustomHook, 'useLoginSchema').mockImplementation(() => {
            return {
                schema: schemaMock,
            };
        });
    });
    it('should test LoginPage rendering', () => {
        const LoginPageView = wrapper.find('LoginPageView');
        expect(LoginPageView.exists()).toBeTruthy();
    });
});
