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
            />
        );
    });
    it('should render RegisterAddressView correctly', () => {
        expect(
            wrapper.find({ 'data-testid': 'RegisterAddressWrapper' }).exists()
        ).toBeTruthy();
        expect(
            wrapper.find({ 'data-testid': 'designSystem.alert' }).exists()
        ).toBeTruthy();
        expect(
            wrapper.find({ 'data-testid': 'RegisterAddressForm' }).exists()
        ).toBeTruthy();
    });
    it('should submit form correctly', () => {
        const form = wrapper.find({ 'data-testid': 'RegisterAddressForm' });
        form.simulate('submit');
        expect(mockOnSubmit).toBeCalledTimes(1);
    });
});
