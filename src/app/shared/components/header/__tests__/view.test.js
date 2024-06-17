import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderView } from '../view';
import * as NavigationHeaderContext from '../../../../shared/stores/navigationHeader';
import { HeaderWrapper, IconWrapper } from '../styles';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mockBack = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            back: mockBack,
        };
    },
}));

describe('Header View', () => {
    const mockNavigationHeaderState = {
        title: 'headerTitle',
        shouldRenderHeader: true,
        shouldRenderBackIcon: true,
    };
    const mockNavigationHeaderDispatch = jest.fn();
    const mockUseNavigationHeaderStateReturn = {
        navigationHeaderDispatch: mockNavigationHeaderDispatch,
        navigationHeader: mockNavigationHeaderState,
    };
    beforeEach(() => {
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => mockUseNavigationHeaderStateReturn);
    });
    it('should render header content', () => {
        render(
            <HeaderView>
                <HeaderWrapper />
            </HeaderView>
        );
        const headerTitle = screen.getByText(mockNavigationHeaderState.title);
        expect(headerTitle).toBeInTheDocument();
    });
    it('should test goBack icon call', () => {
        const wrapper = shallow(<HeaderView />);
        wrapper.find(IconWrapper).simulate('click');
        expect(mockBack).toBeCalledTimes(1);
    });
    it('should test logic on css when shouldRenderHeader is false', () => {
        const mockNavigationHeaderState = {
            title: 'headerTitle',
            shouldRenderHeader: false,
            navigationHistory: [],
        };
        const mockUseNavigationHeaderStateReturn = {
            navigationHeaderDispatch: mockNavigationHeaderDispatch,
            navigationHeader: mockNavigationHeaderState,
        };
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => mockUseNavigationHeaderStateReturn);
        const wrapper = shallow(<HeaderView />);
        const HeaderWrapper = wrapper.find('[data-testid="HeaderWrapper"]');
        expect(HeaderWrapper.exists()).toBeTruthy();
        expect(HeaderWrapper).toHaveStyleRule('visibility', 'hidden');
    });
});
