'use client';
import { createContext, useContext } from 'react';
import { UseReducerReturn } from './interface';

export const UserStateContext = createContext<UseReducerReturn>(
    {} as UseReducerReturn
);

// istanbul ignore next
export const useUserState = (): UseReducerReturn =>
    useContext(UserStateContext);
