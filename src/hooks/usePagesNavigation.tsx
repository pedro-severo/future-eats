import { useCallback } from 'react';
import PATH from '../router/interfaces';
import { useNavigate } from 'react-router-dom';
import { useNavigationHeaderState } from '../global/navigationHeader/context';
import {
    NAVIGATION_ACTION_TYPES,
    NavigationHeaderState,
} from '../global/navigationHeader/interface';
import { navigationHeaderInitialState } from '../global/navigationHeader/reducer';

export const usePagesNavigation = () => {
    const navigate = useNavigate();
    const { navigationHeaderDispatch, navigationHeaderState } =
        useNavigationHeaderState();
    const { navigationHistory } = navigationHeaderState;

    const handleGoToLoginPage = useCallback(() => {
        setNavigationHeaderState(PATH.LOGIN);
        navigate(PATH.LOGIN);
    }, [navigate, navigationHeaderDispatch, navigationHeaderInitialState]);

    const handleGoToRegisterPage = useCallback(() => {
        setNavigationHeaderState(PATH.REGISTER);
        navigate(PATH.REGISTER);
    }, [navigate, navigationHeaderDispatch, navigationHeaderState]);

    const handleGoToHomePage = useCallback(() => {
        setNavigationHeaderState(PATH.HOME);
        navigate(PATH.HOME);
    }, [navigate, navigationHeaderDispatch, navigationHeaderState]);

    const handleGoBack = useCallback(() => {
        const previousPage =
            navigationHistory?.length ?
                navigationHistory[navigationHistory.length - 1]
            :   undefined;
        if (previousPage) {
            navigationHeaderDispatch({
                type: NAVIGATION_ACTION_TYPES.NAVIGATE,
                payload: previousPage,
            });
            navigate(-1);
        } else handleGoToLoginPage();
    }, [
        navigate,
        navigationHeaderDispatch,
        navigationHistory,
        handleGoToLoginPage,
    ]);

    const getNewNavigationHistory = (currentPage: NavigationHeaderState) => {
        const newHistory = [...navigationHistory, currentPage];
        return newHistory;
    };

    const setNavigationHeaderState = (newPath?: PATH): void => {
        const newHistory = getNewNavigationHistory(navigationHeaderState);
        switch (newPath) {
            case PATH.LOGIN:
                return navigationHeaderDispatch({
                    type: NAVIGATION_ACTION_TYPES.NAVIGATE,
                    payload: navigationHeaderInitialState,
                });
            case PATH.REGISTER:
                return navigationHeaderDispatch({
                    type: NAVIGATION_ACTION_TYPES.NAVIGATE,
                    payload: {
                        title: '',
                        hasTitle: false,
                        shouldRenderHeader: true,
                        navigationHistory: newHistory,
                    },
                });
            case PATH.HOME:
                return navigationHeaderDispatch({
                    type: NAVIGATION_ACTION_TYPES.NAVIGATE,
                    payload: {
                        title: 'FutureEats',
                        hasTitle: true,
                        shouldRenderHeader: true,
                        navigationHistory: newHistory,
                    },
                });
            default:
        }
    };

    return {
        handleGoToLoginPage,
        handleGoToRegisterPage,
        handleGoBack,
        handleGoToHomePage,
    };
};
