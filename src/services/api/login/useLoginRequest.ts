import { useCallback } from 'react';
import { useUserState } from '../../../global/user/context';
import { USER_ACTION_TYPES } from '../../../global/user/interface';
import { login } from './request';
import { LoginInput } from './interface';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';

export const useLoginRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();

    const handleLogin = useCallback(
        async (loginInput: LoginInput): Promise<void> => {
            try {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_LOADING,
                });
                const response = await login(loginInput);
                userDispatch({
                    type: USER_ACTION_TYPES.LOGIN_SUCCESS,
                    payload: response.user,
                });
                return handleGoToHomePage();
            } catch (e) {
                // istanbul ignore next
                userDispatch({
                    type: USER_ACTION_TYPES.USER_FAILURE,
                });
            }
        },
        [userDispatch, login, handleGoToHomePage]
    );

    return { handleLogin };
};
