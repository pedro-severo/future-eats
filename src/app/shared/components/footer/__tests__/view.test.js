import React from 'react';
import { shallow } from 'enzyme';
import { FooterView } from '../view';
import PATH from '../../../constants/pathsEnum';
import { theme } from '../../../designSystem/themeProvider';

const mockPush = jest.fn();

describe('FooterView', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <FooterView router={{ push: mockPush }} pagePath="/" />
        );
        jest.clearAllMocks();
    });
    it('should render component correctly', () => {
        const homeIconButton = wrapper.find({
            'data-testid': 'home-icon-button',
        });
        const homeIcon = wrapper.find({ 'data-testid': 'home-icon' });
        const cartIconButton = wrapper.find({
            'data-testid': 'cart-icon-button',
        });
        const cartIcon = wrapper.find({ 'data-testid': 'cart-icon' });
        const profileIconButton = wrapper.find({
            'data-testid': 'profile-icon-button',
        });
        const profileIcon = wrapper.find({ 'data-testid': 'profile-icon' });
        expect(homeIconButton.exists()).toBeTruthy();
        expect(homeIcon.exists()).toBeTruthy();
        expect(cartIconButton.exists()).toBeTruthy();
        expect(cartIcon.exists()).toBeTruthy();
        expect(profileIconButton.exists()).toBeTruthy();
        expect(profileIcon.exists()).toBeTruthy();
    });
    it('should call rout functions on home icon click', () => {
        wrapper.find({ 'data-testid': 'home-icon-button' }).simulate('click');
        expect(mockPush).toBeCalledWith(PATH.DASHBOARD);
    });
    it('should call rout functions on cart icon click', () => {
        wrapper.find({ 'data-testid': 'cart-icon-button' }).simulate('click');
        expect(mockPush).toBeCalledWith(`${PATH.DASHBOARD}${PATH.CART}`);
    });
    it('should call rout functions on profile icon click', () => {
        wrapper
            .find({ 'data-testid': 'profile-icon-button' })
            .simulate('click');
        expect(mockPush).toBeCalledWith(`${PATH.DASHBOARD}${PATH.PROFILE}`);
    });
    it('should not call push function to dashboard because the page already is dashboard', () => {
        wrapper = shallow(
            <FooterView router={{ push: mockPush }} pagePath="/dashboard" />
        );
        wrapper.find({ 'data-testid': 'home-icon-button' }).simulate('click');
        const homeIcon = wrapper.find({ 'data-testid': 'home-icon' });
        expect(mockPush).not.toBeCalled();
        expect(homeIcon.props().color).toBe(theme.palette.primary.main);
    });
    it('should not call push function to cart because the page already is cart', () => {
        wrapper = shallow(
            <FooterView router={{ push: mockPush }} pagePath="/cart" />
        );
        wrapper.find({ 'data-testid': 'cart-icon-button' }).simulate('click');
        const cartIcon = wrapper.find({ 'data-testid': 'cart-icon' });
        expect(mockPush).not.toBeCalled();
        expect(cartIcon.props().color).toBe(theme.palette.primary.main);
    });
    it('should not call push function to profile because the page already is profile', () => {
        wrapper = shallow(
            <FooterView router={{ push: mockPush }} pagePath="/profile" />
        );
        wrapper
            .find({ 'data-testid': 'profile-icon-button' })
            .simulate('click');
        const profileIcon = wrapper.find({ 'data-testid': 'profile-icon' });
        expect(mockPush).not.toBeCalled();
        expect(profileIcon.props().color).toBe(theme.palette.primary.main);
    });
});
