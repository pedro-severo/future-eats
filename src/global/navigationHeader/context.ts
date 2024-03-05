import { createContext, useContext } from 'react';
import { NavigationHeaderReducerReturn } from './interface';

export const NavigationHeaderStateContext =
    createContext<NavigationHeaderReducerReturn>(
        {} as NavigationHeaderReducerReturn
    );

// istanbul ignore next
export const useNavigationHeaderState = (): NavigationHeaderReducerReturn =>
    useContext(NavigationHeaderStateContext);
