import { useCallback } from 'react';
import PATH from '../router/interfaces';
import { useNavigate } from 'react-router-dom';
import {
    navigationHeaderInitialState,
    useNavigationHeaderState,
} from '../global/navigationHeader';
import { NavigationHeaderState } from '../global/navigationHeader/interface';

export const usePagesNavigation = () => {
    const navigate = useNavigate();
    const { setNavigationHeader, navigationHeader } =
        useNavigationHeaderState();
    const { navigationHistory } = navigationHeader;

    const handleGoToLoginPage = useCallback(() => {
        setNavigationHeaderState(PATH.LOGIN);
        navigate(PATH.LOGIN);
    }, [navigate, setNavigationHeader, navigationHeaderInitialState]);

    const handleGoToRegisterPage = useCallback(() => {
        setNavigationHeaderState(PATH.REGISTER);
        navigate(PATH.REGISTER);
    }, [navigate, setNavigationHeader, navigationHeader]);

    const handleGoToHomePage = useCallback(() => {
        setNavigationHeaderState(PATH.HOME);
        navigate(PATH.HOME);
    }, [navigate, setNavigationHeader, navigationHeader]);

    const handleGoBack = useCallback(() => {
        const previousPage =
            navigationHistory?.length ?
                navigationHistory[navigationHistory.length - 1]
            :   undefined;
        if (previousPage) {
            setNavigationHeader(previousPage);
            navigate(-1);
        } else handleGoToLoginPage();
    }, [navigate, setNavigationHeader, navigationHistory, handleGoToLoginPage]);

    const getNewNavigationHistory = (currentPage: NavigationHeaderState) => {
        const newHistory = [...navigationHistory, currentPage];
        return newHistory;
    };

    const setNavigationHeaderState = (newPath?: PATH): void => {
        const newHistory = getNewNavigationHistory(navigationHeader);
        switch (newPath) {
            case PATH.LOGIN:
                return setNavigationHeader(navigationHeaderInitialState);
            case PATH.REGISTER:
                return setNavigationHeader({
                    title: '',
                    hasTitle: false,
                    shouldRenderHeader: true,
                    navigationHistory: newHistory,
                });
            case PATH.HOME:
                return setNavigationHeader({
                    title: 'FutureEats',
                    hasTitle: true,
                    shouldRenderHeader: true,
                    navigationHistory: newHistory,
                });
            // istanbul ignore next
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
