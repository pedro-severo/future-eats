'use client';
import React, { ReactElement, useReducer, useState } from 'react';
import { UserStateContext } from './redux/user';
import { userInitialState, userReducer } from './redux/user/reducer';
import {
    NavigationHeaderStateContext,
    navigationHeaderInitialState,
} from './navigationHeader';
import { NavigationHeaderState } from './navigationHeader/interface';
import {
    userAddressInitialState,
    userAddressReducer,
} from './redux/userAddress/reducer';
import { UserAddressStateContext } from './redux/userAddress';

type GlobalStateProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const GlobalStateProvider = ({
    children,
}: GlobalStateProviderProps): ReactElement => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [userAddressState, userAddressDispatch] = useReducer(
        userAddressReducer,
        userAddressInitialState
    );
    const [navigationHeader, setNavigationHeader] =
        useState<NavigationHeaderState>(navigationHeaderInitialState);
    return (
        <UserStateContext.Provider
            data-testid="user-state-context"
            value={{ userState, userDispatch }}
        >
            <UserAddressStateContext.Provider
                data-testid="user-address-state-context"
                value={{ userAddressState, userAddressDispatch }}
            >
                <NavigationHeaderStateContext.Provider
                    value={{ navigationHeader, setNavigationHeader }}
                    data-testid="navigation-state-context"
                >
                    {children}
                </NavigationHeaderStateContext.Provider>
            </UserAddressStateContext.Provider>
        </UserStateContext.Provider>
    );
};

export default GlobalStateProvider;
