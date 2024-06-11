'use client';
import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { SignupInput } from './interface';
import { SIGNUP } from './schema';
import { ApolloError, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import PATH from '../../../constants/pathsEnum';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';

export const useSignupRequest = () => {
    const { userDispatch } = useUserState();
    const [signup, { loading }] = useMutation(SIGNUP);
    const router = useRouter();

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
                // TODO: see which props from response is used now and update schema to query just this used props
                const user = mapUserDTOToUser(
                    response?.data?.signup?.data?.user
                );
                userDispatch({
                    type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
                    payload: user,
                });
                localStorage.setItem(
                    'token',
                    response?.data?.signup?.data?.token
                );
                router.push(`${PATH.SIGNUP}/${PATH.REGISTER_ADDRESS}`);
            } catch (e) {
                userDispatch({
                    type: USER_ACTION_TYPES.USER_FAILURE,
                    alertMessage: (e as ApolloError).message,
                });
            }
        },
        [signup, userDispatch, router]
    );

    return { handleSignup };
};
