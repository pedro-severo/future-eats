import { useCallback } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { ApolloError, useQuery } from '@apollo/client';
import { AUTHENTICATE } from './schema';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';
import { COOKIES_LABEL, useCookies } from '../../cookies';

export const useAuthenticateRequest = (token: string) => {
    const { userDispatch } = useUserState();
    const { data, error } = useQuery(AUTHENTICATE, {
        variables: { token },
    });
    const { set } = useCookies();

    const handleAuthentication = useCallback(async (): Promise<void> => {
        try {
            console.log(token);
            console.log('🚀 ~ useAuthenticateRequest ~ data:', data, error);
            const user = mapUserDTOToUser(data?.login?.data?.user);
            userDispatch({
                type: USER_ACTION_TYPES.AUTHENTICATE_SUCCESS,
                payload: { user, token },
            });
            set(COOKIES_LABEL.TOKEN, token, {
                expires: 7,
                secure: true,
            });
        } catch (e) {
            userDispatch({
                type: USER_ACTION_TYPES.USER_FAILURE,
                alertMessage: (e as ApolloError).message,
            });
        }
    }, [data, token, error]);

    return {
        handleAuthentication,
    };
};
