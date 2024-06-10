'use client';
import { createContext, useContext } from 'react';
import {
    NavigationHeaderState,
    NavigationHeaderStateReturn,
} from './interface';

export const navigationHeaderInitialState: NavigationHeaderState = {
    title: '',
    hasTitle: false,
    shouldRenderHeader: false,
};

export const NavigationHeaderStateContext =
    createContext<NavigationHeaderStateReturn>(
        {} as NavigationHeaderStateReturn
    );

// istanbul ignore next
export const useNavigationHeaderState = () =>
    useContext(NavigationHeaderStateContext);
