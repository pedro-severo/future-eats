import React from 'react';
import { shallow } from 'enzyme';
import { RegisterAddressView } from '../view';
import { registerAddressInputProperties } from '../constants/inputProperties';

const mockOnSubmit = jest.fn();

describe('RegisterAddressView', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <RegisterAddressView
                onSubmit={mockOnSubmit}
                onCloseAlert={jest.fn()}
                control={{}}
                hasError={false}
                inputProperties={registerAddressInputProperties}
                isLoading={false}
            />
        );
    });
    it('should render RegisterAddressView correctly', () => {
        expect(
            wrapper.find({ 'data-testid': 'register-address-wrapper' }).exists()
        ).toBeTruthy();
        expect(
            wrapper.find({ 'data-testid': 'designSystem-alert' }).exists()
        ).toBeTruthy();
        expect(
            wrapper.find({ 'data-testid': 'register-address-form' }).exists()
        ).toBeTruthy();
    });
    it('should submit form correctly', () => {
        const form = wrapper.find({ 'data-testid': 'register-address-form' });
        form.simulate('submit');
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
    it('should render save button', () => {
        expect(
            wrapper.find({ 'data-testid': 'submit-address-button' }).exists()
        ).toBeTruthy();
    });
    it('should render loading button', () => {
        wrapper = shallow(
            <RegisterAddressView
                onSubmit={mockOnSubmit}
                onCloseAlert={jest.fn()}
                control={{}}
                hasError={false}
                inputProperties={registerAddressInputProperties}
                isLoading={true}
            />
        );
        expect(
            wrapper.find({ 'data-testid': 'loading' }).exists()
        ).toBeTruthy();
    });
});
