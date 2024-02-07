import { useState, createContext, useContext } from 'react';
import { User, UserGlobalState, UserInput } from './interface';

export const useUserDataState = (): UserGlobalState => {
    const [user, setUser] = useState<User>({
        userName: '',
    });

    const setUserProps = (newUserProps: UserInput) => {
        setUser({
            ...user,
            ...newUserProps,
        });
    };

    return {
        user,
        setUserProps,
    };
};

export const UserDataContext = createContext<UserGlobalState>(
    {} as UserGlobalState
);

// TODO: remove this istanbul when we start to use useUserData in some component
// istanbul ignore next
export const useUserData = (): UserGlobalState => useContext(UserDataContext);
