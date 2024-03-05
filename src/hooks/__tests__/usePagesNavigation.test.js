import { renderHook } from '@testing-library/react-hooks';
import { usePagesNavigation } from '../usePagesNavigation';
import PATH from '../../router/paths';
import * as NavigationHeaderContext from '../../global/navigationHeader/context';
import { navigationHeaderInitialState } from '../../global/navigationHeader/reducer';
import { NAVIGATION_ACTION_TYPES } from '../../global/navigationHeader/interface';

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
    const mockNavigationHeaderDispatch = jest.fn();
    const mockUseNavigationHeaderStateReturn = {
        navigationHeaderDispatch: mockNavigationHeaderDispatch,
        navigationHeaderState: mockNavigationHeaderState,
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
        expect(mockNavigationHeaderDispatch).toBeCalled();
        expect(mockNavigationHeaderDispatch).toBeCalledWith({
            type: NAVIGATION_ACTION_TYPES.NAVIGATE,
            payload: navigationHeaderInitialState,
        });
    });
    it('should test handleGoToLoginPage function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoToRegisterPage();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.REGISTER);
        expect(mockNavigationHeaderDispatch).toBeCalled();
    });
    it('should test handleGoBack function', () => {
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoBack();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(PATH.LOGIN);
        expect(mockNavigationHeaderDispatch).toBeCalled();
        expect(mockNavigationHeaderDispatch).toBeCalledWith({
            type: NAVIGATION_ACTION_TYPES.NAVIGATE,
            payload: navigationHeaderInitialState,
        });
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
            navigationHeaderDispatch: mockNavigationHeaderDispatch,
            navigationHeaderState: mockUseContextReturn,
        };
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => mockUseNavigationHeaderStateReturn);
        const { result } = renderHook(() => usePagesNavigation());
        result.current.handleGoBack();
        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(-1);
        expect(mockNavigationHeaderDispatch).toBeCalled();
        expect(mockNavigationHeaderDispatch).toBeCalledWith({
            type: NAVIGATION_ACTION_TYPES.NAVIGATE,
            payload: {
                title: 'title',
                hasTitle: false,
                shouldRenderHeader: false,
                navigationHistory: [],
            },
        });
    });
});
