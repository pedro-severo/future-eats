import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../global/user/context';
import { USER_ACTION_TYPES } from '../../../global/user/interface';
import { LoginInput } from './interface';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import { ApolloError, useMutation } from '@apollo/client';
import { LOGIN } from './schema';

export const useLoginRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();
    const [login, { loading }] = useMutation(LOGIN);

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
                userDispatch({
                    type: USER_ACTION_TYPES.LOGIN_SUCCESS,
                    payload: response?.data?.login?.data?.user,
                });
                handleGoToHomePage();
            } catch (e) {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_FAILURE,
                    alertMessage: (e as ApolloError).message,
                });
            }
        },
        [userDispatch, login, handleGoToHomePage]
    );

    return { handleLogin };
};
