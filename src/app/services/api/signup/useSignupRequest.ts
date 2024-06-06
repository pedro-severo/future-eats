'use client';
import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { SignupInput } from './interface';
import { SIGNUP } from './schema';
import { ApolloError, useMutation } from '@apollo/client';

export const useSignupRequest = () => {
    const { userDispatch } = useUserState();
    const [signup, { loading }] = useMutation(SIGNUP);

    useEffect(() => {
        if (loading)
            userDispatch({
                type: USER_ACTION_TYPES.USER_LOADING,
            });
    }, [loading, userDispatch]);

    const handleSignup = useCallback(
        async (signupInput: SignupInput): Promise<void> => {
            try {
                const { email, password, cpf, name } = signupInput;
                const response = await signup({
                    variables: { email, password, cpf, name },
                });
                userDispatch({
                    type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
                    payload: response?.data?.signup?.data?.user,
                });
                // TODO: add route func: go to home page
            } catch (e) {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_FAILURE,
                    alertMessage: (e as ApolloError).message,
                });
            }
        },
        [userDispatch, signup]
    );

    return { handleSignup };
};
