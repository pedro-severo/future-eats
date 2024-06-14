import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../page';
import { yupCustomValidationsSetup } from '../../shared/services/yup';

jest.mock('../hooks/useSignupPage', () => ({
    useSignupPage: jest.fn().mockImplementation(() => ({
        onSubmitForm: jest.fn(),
        control: {},
        handleSubmit: jest.fn(jest.fn()),
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
    });
    it('should test SignupPage rendering', () => {
        const SignupPageView = wrapper.find('SignupPageView');
        expect(SignupPageView.exists()).toBeTruthy();
    });
});
