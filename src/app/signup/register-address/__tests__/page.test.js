import React from 'react';
import { yupCustomValidationsSetup } from '../../../shared/services/yup';
import { shallow } from 'enzyme';
import RegisterAddress from '../page';

jest.mock('../hooks/useRegisterAddressPage', () => ({
    useRegisterAddressPage: jest.fn().mockImplementation(() => ({
        onSubmit: jest.fn(),
        control: {},
        handleSubmit: jest.fn(jest.fn()),
        hasLoginError: false,
        closeAlert: jest.fn(),
        alertMessage: 'OLLAAAr',
        inputProperties: [],
        hasError: false,
        onCloseAlert: jest.fn(),
    })),
}));

describe('RegisterAddressPage', () => {
    let wrapper;
    beforeEach(() => {
        yupCustomValidationsSetup();
        wrapper = shallow(<RegisterAddress />);
    });
    it('should test RegisterAddress page rendering', () => {
        const RegisterAddressView = wrapper.find('RegisterAddressView');
        expect(RegisterAddressView.exists()).toBeTruthy();
    });
});
