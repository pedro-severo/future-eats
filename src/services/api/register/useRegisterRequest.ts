import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../global/user/context';
import { USER_ACTION_TYPES } from '../../../global/user/interface';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import { RegisterInput } from './interface';
import { REGISTER } from './schema';
import { useMutation } from '@apollo/client';

export const useRegisterRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();
    const [signup, { loading, error }] = useMutation(REGISTER);

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

    const handleRegister = useCallback(
        async (registerInput: RegisterInput): Promise<void> => {
            const { email, password, cpf, name } = registerInput;
            signup({ variables: { email, password, cpf, name } })
                .then((response) => {
                    userDispatch({
                        type: USER_ACTION_TYPES.REGISTER_SUCCESS,
                        payload: response.data.signup.data.user,
                    });
                    handleGoToHomePage();
                })
                .catch(() => {
                    // do nothing
                });
        },
        [userDispatch, handleGoToHomePage, signup]
    );

    return { handleRegister };
};
