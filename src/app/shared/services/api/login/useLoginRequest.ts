import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { LoginInput } from './interface';
import { ApolloError, useMutation } from '@apollo/client';
import { LOGIN } from './schema';
import { useRouter } from 'next/navigation';
import PATH from '../../../constants/pathsEnum';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';
import { COOKIES_LABEL, cookies } from '../../cookies';

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
                cookies().set(
                    COOKIES_LABEL.TOKEN,
                    response?.data?.login?.data?.token,
                    { expires: 7, secure: true }
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
