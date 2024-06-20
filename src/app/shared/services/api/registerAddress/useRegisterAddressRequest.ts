import { useCallback, useEffect } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { useUserAddressState } from '../../../stores/redux/userAddress';
import { REGISTER_ADDRESS } from './schema';
import { useRouter } from 'next/navigation';
import { USER_ADDRESS_ACTION_TYPES } from '../../../stores/redux/userAddress/interface';
import { RegisterAddressInput } from './interfaces';
import PATH from '../../../constants/pathsEnum';
import { mapUserAddressDTOToUserAddress } from '../shared/user/mapUserAddressDTOToUserAddress';

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
                const userAddress = mapUserAddressDTOToUserAddress(
                    response?.data?.registerAddress?.data
                );
                userAddressDispatch({
                    type: USER_ADDRESS_ACTION_TYPES.SUCCESS,
                    payload: userAddress,
                });
                router.push(PATH.DASHBOARD);
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
