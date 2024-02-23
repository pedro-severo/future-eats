import { useState, createContext, useContext } from 'react';
import {
    NavigationHeader,
    NavigationHeaderGlobalState,
    NavigationHeaderInput,
} from './interface';

export const navigationHeaderInitialState = {
    title: '',
    hasTitle: false,
    shouldRenderHeader: false,
    navigationHistory: [],
};

export const useNavigationHeaderDataState = (): NavigationHeaderGlobalState => {
    const [navigationHeader, setNavigationHeader] = useState<NavigationHeader>(
        navigationHeaderInitialState
    );

    const setNavigationHeaderProps = (
        newNavigationHeaderProps: NavigationHeaderInput
    ) => {
        setNavigationHeader({
            ...navigationHeader,
            ...newNavigationHeaderProps,
        });
    };

    return {
        navigationHeader,
        setNavigationHeaderProps,
    };
};

export const NavigationHeaderDataContext =
    createContext<NavigationHeaderGlobalState>(
        {} as NavigationHeaderGlobalState
    );

// istanbul ignore next
export const useNavigationHeaderData = (): NavigationHeaderGlobalState =>
    useContext(NavigationHeaderDataContext);
