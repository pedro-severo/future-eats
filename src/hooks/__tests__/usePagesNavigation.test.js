import { renderHook } from '@testing-library/react-hooks';
import { usePagesNavigation } from '../usePagesNavigation';
import PATH from '../../router/interfaces';
import * as NavigationHeaderContext from '../../global/navigationHeader';
import { navigationHeaderInitialState } from '../../global/navigationHeader';

// TODO: Fix file test

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('usePagesNavigation', () => {
    const mockNavigationHeaderState = {
        title: 'headerTitle',
        shouldRenderHeader: true,
        navigationHistory: [],
    };
    const mockSetNavigationHeader = jest.fn();
    const mockUseNavigationHeaderStateReturn = {
        setNavigationHeader: mockSetNavigationHeader,
        navigationHeader: mockNavigationHeaderState,
    };
    beforeEach(() => {
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => mockUseNavigationHeaderStateReturn);
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
        expect(mockSetNavigationHeader).toBeCalled();
        expect(mockSetNavigationHeader).toBeCalledWith(
            NavigationHeaderContext.navigationHeaderInitialState
        );
    });
    it('should test handleGoToLoginPage function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoToRegisterPage();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.REGISTER);
        expect(mockSetNavigationHeader).toBeCalled();
    });
    it('should test handleGoToHomePage function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoToHomePage();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.HOME);
        expect(mockSetNavigationHeader).toBeCalled();
    });
    it('should test handleGoBack function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoBack();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.LOGIN);
        expect(mockSetNavigationHeader).toBeCalled();
        expect(mockSetNavigationHeader).toBeCalledWith(
            navigationHeaderInitialState
        );
    });
    it('should test handleGoBack function', () => {
        const mockUseContextReturn = {
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
        };
        const mockUseNavigationHeaderStateReturn = {
            setNavigationHeader: mockSetNavigationHeader,
            navigationHeader: mockUseContextReturn,
        };
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => mockUseNavigationHeaderStateReturn);
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoBack();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(-1);
        expect(mockSetNavigationHeader).toBeCalled();
        expect(mockSetNavigationHeader).toBeCalledWith({
            title: 'title',
            hasTitle: false,
            shouldRenderHeader: false,
            navigationHistory: [],
        });
    });
});
