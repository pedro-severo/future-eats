import React, { useEffect } from 'react';
import { shallow } from 'enzyme';
import { Alert } from '.';

const mockIsOpen = true;
const mockSetIsOpen = jest.fn();

jest.mock('React', () => ({
    ...jest.requireActual('React'),
    useEffect: jest.fn(),
}));

describe('Alert - Design System', () => {
    let wrapper;
    it('should render component correctly', () => {
        wrapper = shallow(
            <Alert isOpen={mockIsOpen} message="oloco meu, ta pegando fogo" />
        );
        expect(wrapper.exists()).toBeTruthy();
        expect(useEffect.mock.calls[0][1][0]).toBe(mockIsOpen);
    });
    it('should call setState function on useEffect', () => {
        wrapper.setProps({ isOpen: false });
        setTimeout(() => {
            expect(mockSetIsOpen).toHaveBeenCalledWith(false);
        }, 3000);
    });
});
