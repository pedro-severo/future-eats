import React from 'react';
import { render } from '@testing-library/react';
import { HeaderView } from '../view';
import 'jest-styled-components';

describe('Header View', () => {
    let wrapper;
    it('should render header wrapper component', () => {
        wrapper = render(<HeaderView />);
        expect(wrapper.getByTestId('header-wrapper')).toBeTruthy();
    });
    it('should render HeaderWrapper with css visibility prop as hidden', () => {
        wrapper = render(<HeaderView shouldRenderHeader={false} />);
        expect(wrapper.getByTestId('header-wrapper')).toHaveStyleRule(
            'visibility',
            'hidden'
        );
    });
    it('should render HeaderWrapper with css visibility prop as none', () => {
        wrapper = render(<HeaderView shouldRenderHeader />);
        expect(wrapper.getByTestId('header-wrapper')).toHaveStyleRule(
            'visibility',
            'none'
        );
    });
    it('should render HeaderWrapper with css display prop as flex', () => {
        wrapper = render(<HeaderView pathName={'/path'} />);
        expect(wrapper.getByTestId('header-wrapper')).toHaveStyleRule(
            'display',
            'flex'
        );
    });
    it('should render HeaderWrapper with css display prop as none', () => {
        wrapper = render(<HeaderView pathName={'/'} />);
        expect(wrapper.getByTestId('header-wrapper')).toHaveStyleRule(
            'display',
            'none'
        );
    });
    it('should render HeaderWrapper with css display prop as none', () => {
        wrapper = render(<HeaderView pathName={'/'} />);
        expect(wrapper.getByTestId('header-wrapper')).toHaveStyleRule(
            'display',
            'none'
        );
    });
    it('should render IconWrapper', () => {
        wrapper = render(<HeaderView shouldRenderBackIcon={true} />);
        expect(wrapper.getByTestId('icon-wrapper')).toBeTruthy();
    });
});
