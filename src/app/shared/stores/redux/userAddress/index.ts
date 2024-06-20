import { createContext, useContext } from 'react';
import { UserAddressReducerReturn } from './interface';

export const UserAddressStateContext = createContext<UserAddressReducerReturn>(
    {} as UserAddressReducerReturn
);

// istanbul ignore next
export const useUserAddressState = (): UserAddressReducerReturn =>
    useContext(UserAddressStateContext);
