import { useCallback, useContext } from 'react';
import PATH from '../routes/paths';
import { useNavigate } from 'react-router-dom';
import {
    NavigationHeaderDataContext,
    navigationHeaderInitialState,
} from '../global/entities/navigationHeader';
import { NavigationHeader } from '../global/entities/navigationHeader/interface';

export const usePagesNavigation = () => {
    const navigate = useNavigate();
    const { setNavigationHeaderProps, navigationHeader } = useContext(
        NavigationHeaderDataContext
    );
    const { navigationHistory } = navigationHeader;

    const handleGoToLoginPage = useCallback(() => {
        setNavigationHeaderProps(navigationHeaderInitialState);
        navigate(PATH.LOGIN);
    }, [navigate, setNavigationHeaderProps, navigationHeaderInitialState]);

    const handleGoToRegisterPage = useCallback(() => {
        const newHistory = getNewNavigationHistory(navigationHeader);
        setNavigationHeaderProps({
            title: 'd d',
            hasTitle: false,
            shouldRenderHeader: true,
            navigationHistory: newHistory,
        });
        navigate(PATH.REGISTER);
    }, [navigate, setNavigationHeaderProps, navigationHeader]);

    const handleGoBack = useCallback(() => {
        const previousPage =
            navigationHistory?.length ?
                navigationHistory[navigationHistory.length - 1]
            :   undefined;
        if (previousPage) {
            setNavigationHeaderProps(previousPage);
            navigate(-1);
        } else handleGoToLoginPage();
    }, [
        navigate,
        setNavigationHeaderProps,
        navigationHistory,
        handleGoToLoginPage,
    ]);

    const getNewNavigationHistory = (currentPage: NavigationHeader) => {
        const newHistory = [...navigationHistory, currentPage];
        return newHistory;
    };

    return {
        handleGoToLoginPage,
        handleGoToRegisterPage,
        handleGoBack,
    };
};
