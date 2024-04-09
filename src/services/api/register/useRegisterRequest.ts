import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../global/redux/user';
import { USER_ACTION_TYPES } from '../../../global/redux/user/interface';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import { RegisterInput } from './interface';
import { REGISTER } from './schema';
import { ApolloError, useMutation } from '@apollo/client';

export const useRegisterRequest = () => {
    const { userDispatch } = useUserState();
    const { handleGoToHomePage } = usePagesNavigation();
    const [signup, { loading }] = useMutation(REGISTER);

    useEffect(() => {
        if (loading)
            userDispatch({
                type: USER_ACTION_TYPES.USER_LOADING,
            });
    }, [loading, userDispatch]);

    const handleRegister = useCallback(
        async (registerInput: RegisterInput): Promise<void> => {
            try {
                const { email, password, cpf, name } = registerInput;
                const response = await signup({
                    variables: { email, password, cpf, name },
                });
                userDispatch({
                    type: USER_ACTION_TYPES.REGISTER_SUCCESS,
                    payload: response?.data?.signup?.data?.user,
                });
                handleGoToHomePage();
            } catch (e) {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_FAILURE,
                    alertMessage: (e as ApolloError).message,
                });
            }
        },
        [userDispatch, handleGoToHomePage, signup]
    );

    return { handleRegister };
};
