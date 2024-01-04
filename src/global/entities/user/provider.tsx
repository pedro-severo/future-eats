import { ReactElement } from 'react';
import { useUserDataState, UserDataContext } from '.';

type UseUserDataProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const GlobalUserProvider = ({
    children,
}: UseUserDataProviderProps): ReactElement => {
    const { user, setUserProps } = useUserDataState();
    return (
        <UserDataContext.Provider value={{ user, setUserProps }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default GlobalUserProvider;
