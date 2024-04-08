import React, { ReactElement, useReducer, useState } from 'react';
import { UserStateContext } from './redux/user/context';
import { userInitialState, userReducer } from './redux/user/reducer';
import {
    NavigationHeaderStateContext,
    navigationHeaderInitialState,
} from './navigationHeader';
import { NavigationHeaderState } from './navigationHeader/interface';

type GlobalStateProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const GlobalStateProvider = ({
    children,
}: GlobalStateProviderProps): ReactElement => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [navigationHeader, setNavigationHeader] =
        useState<NavigationHeaderState>(navigationHeaderInitialState);
    return (
        <UserStateContext.Provider value={{ userState, userDispatch }}>
            <NavigationHeaderStateContext.Provider
                value={{ navigationHeader, setNavigationHeader }}
            >
                {children}
            </NavigationHeaderStateContext.Provider>
        </UserStateContext.Provider>
    );
};

export default GlobalStateProvider;
