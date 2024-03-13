import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../global/user/context';
import { USER_ACTION_TYPES } from '../../../global/user/interface';
import { LoginInput } from './interface';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import { useMutation } from '@apollo/client';
import { LOGIN } from './schema';

export const useLoginRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();
    const [login, { loading, error }] = useMutation(LOGIN);

    useEffect(() => {
        if (loading)
            userDispatch({
                type: USER_ACTION_TYPES.USER_LOADING,
            });
    }, [loading, userDispatch]);

    useEffect(() => {
        if (error)
            userDispatch({
                type: USER_ACTION_TYPES.USER_FAILURE,
            });
    }, [error, userDispatch]);

    const handleLogin = useCallback(
        async (loginInput: LoginInput): Promise<void> => {
            const { email, password } = loginInput;
            login({ variables: { email, password } })
                .then((response) => {
                    userDispatch({
                        type: USER_ACTION_TYPES.LOGIN_SUCCESS,
                        payload: response.data.login.data.user,
                    });
                    handleGoToHomePage();
                })
                .catch(() => {
                    // do nothing
                });
        },
        [userDispatch, login, handleGoToHomePage]
    );

    return { handleLogin };
};
