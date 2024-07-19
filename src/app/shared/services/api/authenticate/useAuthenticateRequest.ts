import { useCallback } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { ApolloError } from '@apollo/client';
import { authenticateQuery } from './authenticateQuery';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';
import { COOKIES_LABEL, useCookies } from '../../cookies';

export const useAuthenticateRequest = () => {
    const { userDispatch } = useUserState();
    const { set } = useCookies();

    const handleAuthentication = useCallback(
        async (token: string): Promise<void> => {
            try {
                const data = await authenticateQuery(token || '');
                const user = mapUserDTOToUser(data.user);
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
        },
        [set]
    );

    return {
        handleAuthentication,
    };
};
