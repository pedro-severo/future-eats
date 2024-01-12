import React, { ReactElement } from 'react';
import { useUserDataState, UserDataContext } from './entities/user';
import {
    NavigationHeaderDataContext,
    useNavigationHeaderDataState,
} from './entities/navigationHeader';

type GlobalStateProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const GlobalStateProvider = ({
    children,
}: GlobalStateProviderProps): ReactElement => {
    const { user, setUserProps } = useUserDataState();
    const { navigationHeader, setNavigationHeaderProps } =
        useNavigationHeaderDataState();
    return (
        <UserDataContext.Provider value={{ user, setUserProps }}>
            <NavigationHeaderDataContext.Provider
                value={{ navigationHeader, setNavigationHeaderProps }}
            >
                {children}
            </NavigationHeaderDataContext.Provider>
        </UserDataContext.Provider>
    );
};

export default GlobalStateProvider;
