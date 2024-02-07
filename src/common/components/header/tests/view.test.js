import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderView } from '../view';
import * as NavigationHeaderContext from '../../../../global/entities/navigationHeader';
import { HeaderWrapper } from '../styles';

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
        render(
            <HeaderView>
                <HeaderWrapper />
            </HeaderView>
        );
    });
    it('should test css config who hide/unhide header of screen', () => {
        const headerTitle = screen.getByText(
            mockNavigationHeaderDataContext.navigationHeader.title
        );
        expect(headerTitle).toBeInTheDocument();
    });
});
