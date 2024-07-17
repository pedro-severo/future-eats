import { useForm } from 'react-hook-form';
import {
    IRegisterAddressInputNames,
    useRegisterAddressSchema,
} from './useRegisterAddressSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAddressInputProperties } from '../constants/inputProperties';
import { useUserAddressState } from '../../../shared/stores/redux/userAddress';
import { USER_ADDRESS_ACTION_TYPES } from '../../../shared/stores/redux/userAddress/interface';
import { useUserState } from '../../../shared/stores/redux/user';
import { RegisterAddressInput } from '../../../shared/services/api/registerAddress/interfaces';
import { useRegisterAddressRequest } from '../../../shared/services/api/registerAddress/useRegisterAddressRequest';
import { useCallback, useEffect } from 'react';
import { useProtectedPage } from '../../../shared/hooks/useProtectedPage';
import { useNavigationHeaderState } from '../../../shared/stores/navigationHeader';

export const useRegisterAddressPage = () => {
    useProtectedPage();
    const { setNavigationHeader } = useNavigationHeaderState();
    const { schema } = useRegisterAddressSchema();
    const { control, handleSubmit } = useForm<IRegisterAddressInputNames>({
        // @ts-expect-error yup expected error
        resolver: yupResolver(schema),
    });
    const {
        userAddressState: { hasError, alertMessage, isLoading },
        userAddressDispatch,
    } = useUserAddressState();
    const {
        userState: { user },
    } = useUserState();

    useEffect(() => {
        setNavigationHeader({
            shouldRenderHeader: true,
            title: '',
            shouldRenderBackIcon: false,
        });
    }, []);

    const { handleRegisterAddress } = useRegisterAddressRequest();

    const onSubmit = useCallback(
        async (data: IRegisterAddressInputNames) => {
            const registerAddressInput: RegisterAddressInput = {
                city: data.city,
                complement: data.complement || undefined,
                state: data.state,
                streetName: data.streetName,
                streetNumber: data.streetNumber,
                zone: data.zone,
                userId: user.id,
            };
            await handleRegisterAddress(registerAddressInput);
        },
        [handleRegisterAddress, user.id]
    );

    const onCloseAlert = useCallback(() => {
        userAddressDispatch({ type: USER_ADDRESS_ACTION_TYPES.RESET_STATE });
    }, []);

    const onSubmitForm = useCallback(handleSubmit(onSubmit), [
        handleSubmit,
        onSubmit,
    ]);

    return {
        onSubmitForm,
        control,
        handleSubmit,
        inputProperties: registerAddressInputProperties,
        hasError,
        alertMessage,
        onCloseAlert,
        isLoading,
    };
};
