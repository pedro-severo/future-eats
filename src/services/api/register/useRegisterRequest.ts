import { useCallback } from 'react';
import { useUserState } from '../../../global/user/context';
import { USER_ACTION_TYPES } from '../../../global/user/interface';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import { RegisterInput } from './interface';
import { register } from './request';

export const useRegisterRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();

    const handleRegister = useCallback(
        async (registerInput: RegisterInput): Promise<void> => {
            try {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_LOADING,
                });
                const response = await register(registerInput);
                userDispatch({
                    type: USER_ACTION_TYPES.REGISTER_SUCCESS,
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
        [userDispatch, handleGoToHomePage, register]
    );

    return { handleRegister };
};
