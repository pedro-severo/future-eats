import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderView } from '../view';
import * as NavigationHeaderContext from '../../../../global/navigationHeader';
import { HeaderWrapper } from '../styles';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mockUsedNavigate = jest.fn();

const mockUsePagesNavigations = {
    handleGoBack: jest.fn(),
};

jest.mock('../../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => mockUsePagesNavigations,
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

describe('Header View', () => {
    const mockNavigationHeaderState = {
        title: 'headerTitle',
        shouldRenderHeader: true,
        navigationHistory: [],
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
