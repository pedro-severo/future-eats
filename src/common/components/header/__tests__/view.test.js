import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderView } from '../view';
import * as NavigationHeaderContext from '../../../../global/entities/navigationHeader';
import { HeaderWrapper } from '../styles';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mockUsedNavigate = jest.fn();

const mockUsePagesNavigations = {
    handleGoToRegisterPage: jest.fn(),
    handleGoBack: jest.fn(),
};

const mockNavigationHeaderDataContext = {
    navigationHeader: {
        title: 'headerTitle',
        shouldRenderHeader: true,
        navigationHistory: [],
    },
};

jest.mock('../../../../hooks/usePagesNavigation', () => ({
    usePagesNavigation: () => mockUsePagesNavigations,
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

describe('Header View', () => {
    beforeEach(() => {
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderData'
        ).mockImplementation(() => mockNavigationHeaderDataContext);
    });
    it('should render header content', () => {
        render(
            <HeaderView>
                <HeaderWrapper />
            </HeaderView>
        );
        const headerTitle = screen.getByText(
            mockNavigationHeaderDataContext.navigationHeader.title
        );
        expect(headerTitle).toBeInTheDocument();
    });
    it('should test logic on css when shouldRenderHeader is false', () => {
        const mockNavigationHeaderDataContext = {
            navigationHeader: {
                title: 'headerTitle',
                shouldRenderHeader: false,
                navigationHistory: [],
            },
        };
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderData'
        ).mockImplementation(() => mockNavigationHeaderDataContext);
        const wrapper = shallow(<HeaderView />);
        const HeaderWrapper = wrapper.find('[data-testid="HeaderWrapper"]');
        expect(HeaderWrapper.exists()).toBeTruthy();
        expect(HeaderWrapper).toHaveStyleRule('visibility', 'hidden');
    });
});
