import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { usePagesNavigation } from '../usePagesNavigation';
import PATH from '../../routes/paths';
import { navigationHeaderInitialState } from '../../global/entities/navigationHeader';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('usePagesNavigation', () => {
    const mockSetNavigationHeaderProps = jest.fn();
    const mockNavigationHeader = {
        title: 'title',
        hasTitle: false,
        shouldRenderHeader: false,
        navigationHistory: [],
    };
    const mockUseContextReturn = {
        setNavigationHeaderProps: mockSetNavigationHeaderProps,
        navigationHeader: mockNavigationHeader,
    };
    beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(
            () => mockUseContextReturn
        );
    });
    it('should test usePagesNavigation return values', () => {
        const { result } = renderHook(() => usePagesNavigation());
        expect(typeof result.current.handleGoToLoginPage).toBe('function');
        expect(typeof result.current.handleGoToRegisterPage).toBe('function');
        expect(typeof result.current.handleGoBack).toBe('function');
    });
    it('should test handleGoToLoginPage function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoToLoginPage();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.LOGIN);
        expect(mockSetNavigationHeaderProps).toBeCalled();
        expect(mockSetNavigationHeaderProps).toBeCalledWith(
            navigationHeaderInitialState
        );
    });
    it('should test handleGoToLoginPage function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoToRegisterPage();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.REGISTER);
        expect(mockSetNavigationHeaderProps).toBeCalled();
    });
    it('should test handleGoBack function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoBack();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.LOGIN);
        expect(mockSetNavigationHeaderProps).toBeCalled();
        expect(mockSetNavigationHeaderProps).toBeCalledWith(
            navigationHeaderInitialState
        );
    });
    it('should test handleGoBack function', () => {
        const mockUseContextReturn = {
            setNavigationHeaderProps: mockSetNavigationHeaderProps,
            navigationHeader: {
                title: 'title',
                hasTitle: false,
                shouldRenderHeader: false,
                navigationHistory: [
                    {
                        title: 'title',
                        hasTitle: false,
                        shouldRenderHeader: false,
                        navigationHistory: [],
                    },
                ],
            },
        };
        jest.spyOn(React, 'useContext').mockImplementation(
            () => mockUseContextReturn
        );
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoBack();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(-1);
        expect(mockSetNavigationHeaderProps).toBeCalled();
        expect(mockSetNavigationHeaderProps).toBeCalledWith({
            title: 'title',
            hasTitle: false,
            shouldRenderHeader: false,
            navigationHistory: [],
        });
    });
});
