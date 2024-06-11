'use client';

import { useCallback, useEffect } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { useUserAddressState } from '../../../stores/redux/userAddress';
import { REGISTER_ADDRESS } from './schema';
import { useRouter } from 'next/navigation';
import { USER_ADDRESS_ACTION_TYPES } from '../../../stores/redux/userAddress/interface';
import { RegisterAddressInput } from './interfaces';
import PATH from '../../../constants/pathsEnum';

export const useRegisterAddressRequest = () => {
    const { userAddressDispatch } = useUserAddressState();
    const [registerAddress, { loading }] = useMutation(REGISTER_ADDRESS);
    const router = useRouter();

    useEffect(() => {
        if (loading)
            userAddressDispatch({
                type: USER_ADDRESS_ACTION_TYPES.LOADING,
            });
    }, [loading, userAddressDispatch]);

    const handleRegisterAddress = useCallback(
        async (registerAddressInput: RegisterAddressInput): Promise<void> => {
            try {
                const response = await registerAddress({
                    variables: registerAddressInput,
                });
                // TODO: create a map function to map response before save in sate
                // TODO: see which props from response is used now and update schema to query just this used props
                userAddressDispatch({
                    type: USER_ADDRESS_ACTION_TYPES.SUCCESS,
                    payload: response.data?.registerAddress?.data,
                });
                router.push(PATH.HOME);
            } catch (e) {
                userAddressDispatch({
                    type: USER_ADDRESS_ACTION_TYPES.FAILURE,
                    alertMessage: (e as ApolloError).message,
                });
            }
        },
        [registerAddress, router, userAddressDispatch]
    );

    return { handleRegisterAddress };
};
