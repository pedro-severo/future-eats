import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { SignupInput } from './interface';
import { SIGNUP } from './schema';
import { ApolloError, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import PATH from '../../../constants/pathsEnum';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';
import { COOKIES_LABEL, useCookies } from '../../cookies';

export const useSignupRequest = () => {
    const { userDispatch } = useUserState();
    const [signup, { loading }] = useMutation(SIGNUP);
    const router = useRouter();
    const { set } = useCookies();

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
                console.log('oi');
                const user = mapUserDTOToUser(
                    response?.data?.signup?.data?.user
                );
                const token = response?.data?.signup?.data?.token;
                userDispatch({
                    type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
                    payload: { user, token },
                });
                set(COOKIES_LABEL.TOKEN, token, {
                    expires: 7,
                    secure: true,
                });
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
