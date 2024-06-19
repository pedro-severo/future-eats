import React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from '.';

describe('CustomButton', () => {
    it('should render button normally', () => {
        const wrapper = shallow(<CustomButton label="Xablau" />);
        expect(
            wrapper.find({ 'data-testid': 'custom-button-wrapper' }).exists()
        ).toBeTruthy();
        expect(
            wrapper
                .findWhere((node) => {
                    return node.text() === 'Xablau';
                })
                .exists()
        ).toBeTruthy();
    });
    it('should render button with loading', () => {
        const wrapper = shallow(<CustomButton label="Xablau" isLoading />);
        expect(
            wrapper.find({ 'data-testid': 'custom-button-wrapper' }).exists()
        ).toBeTruthy();
        expect(
            wrapper
                .findWhere((node) => {
                    return node.text() === 'Xablau';
                })
                .exists()
        ).not.toBeTruthy();
        expect(
            wrapper.find({ 'data-testid': 'custom-buttom-loading' }).exists()
        ).toBeTruthy();
    });
});
