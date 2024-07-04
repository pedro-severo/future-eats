import { useCallback, useEffect } from 'react';
import { useUserState } from '../../../stores/redux/user';
import { ApolloError, useMutation } from '@apollo/client';
import { AUTHENTICATE } from './schema';
import { USER_ACTION_TYPES } from '../../../stores/redux/user/interface';
import { mapUserDTOToUser } from '../shared/user/mapUserDTOToUser';
import { cookies } from 'next/headers';
import { COOKIES_LABEL } from '../../cookies';

export const useAuthenticateRequest = () => {
    const { userDispatch } = useUserState();
    const [authenticate, { loading }] = useMutation(AUTHENTICATE);

    useEffect(() => {
        // TODO: confirm if loading in global state is finishing the hook flow as false
        if (loading)
            userDispatch({
                type: USER_ACTION_TYPES.USER_LOADING,
            });
    }, [loading, userDispatch]);

    const handleAuthenticate = useCallback(
        async (token: string): Promise<void> => {
            try {
                const response = await authenticate({
                    variables: { token },
                });
                const user = mapUserDTOToUser(
                    response?.data?.login?.data?.user
                );
                userDispatch({
                    type: USER_ACTION_TYPES.AUTHENTICATE_SUCCESS,
                    payload: { user, token },
                });
                cookies().set(COOKIES_LABEL.TOKEN, token, {
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
        []
    );

    return {
        handleAuthenticate,
    };
};
