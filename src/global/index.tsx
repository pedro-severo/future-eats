import React, { ReactElement, useReducer } from 'react';
import { UserStateContext } from './user/context';
import { userInitialState, userReducer } from './user/reducer';
import { NavigationHeaderStateContext } from './navigationHeader/context';
import {
    navigationHeaderInitialState,
    navigationHeaderReducer,
} from './navigationHeader/reducer';

type GlobalStateProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const GlobalStateProvider = ({
    children,
}: GlobalStateProviderProps): ReactElement => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [navigationHeaderState, navigationHeaderDispatch] = useReducer(
        navigationHeaderReducer,
        navigationHeaderInitialState
    );
    return (
        <UserStateContext.Provider value={{ userState, userDispatch }}>
            <NavigationHeaderStateContext.Provider
                value={{ navigationHeaderState, navigationHeaderDispatch }}
            >
                {children}
            </NavigationHeaderStateContext.Provider>
        </UserStateContext.Provider>
    );
};

export default GlobalStateProvider;
