import { useCallback } from 'react';
import PATH from '../router/paths';
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
        navigationHeaderDispatch({
            type: NAVIGATION_ACTION_TYPES.NAVIGATE,
            payload: navigationHeaderInitialState,
        });
        navigate(PATH.LOGIN);
    }, [navigate, navigationHeaderDispatch, navigationHeaderInitialState]);

    const handleGoToRegisterPage = useCallback(() => {
        const newHistory = getNewNavigationHistory(navigationHeaderState);
        navigationHeaderDispatch({
            type: NAVIGATION_ACTION_TYPES.NAVIGATE,
            payload: {
                title: '',
                hasTitle: false,
                shouldRenderHeader: true,
                navigationHistory: newHistory,
            },
        });
        navigate(PATH.REGISTER);
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

    return {
        handleGoToLoginPage,
        handleGoToRegisterPage,
        handleGoBack,
    };
};
