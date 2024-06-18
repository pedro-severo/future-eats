'use client';
import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { LoginInput } from './interface';
import { ApolloError, useMutation } from '@apollo/client';
import { LOGIN } from './schema';
import { useRouter } from 'next/navigation';
import PATH from '../../../constants/pathsEnum';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';

export const useLoginRequest = () => {
    const { userDispatch } = useUserState();
    const [login, { loading }] = useMutation(LOGIN);
    const router = useRouter();

    useEffect(() => {
        if (loading)
            userDispatch({
                type: USER_ACTION_TYPES.USER_LOADING,
            });
    }, [loading, userDispatch]);

    const handleLogin = useCallback(
        async (loginInput: LoginInput): Promise<void> => {
            try {
                const { email, password } = loginInput;
                const response = await login({
                    variables: { email, password },
                });
                const user = mapUserDTOToUser(
                    response?.data?.login?.data?.user
                );
                userDispatch({
                    type: USER_ACTION_TYPES.LOGIN_SUCCESS,
                    payload: user,
                });
                localStorage.setItem(
                    'token',
                    response?.data?.login?.data?.token
                );
                router.push(PATH.DASHBOARD);
            } catch (e) {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_FAILURE,
                    alertMessage: (e as ApolloError).message,
                });
            }
        },
        [login, userDispatch, router]
    );

    return { handleLogin };
};
