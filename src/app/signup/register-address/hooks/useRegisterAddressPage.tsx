'use client';

import { useForm } from 'react-hook-form';
import {
    IRegisterAddressInputNames,
    useRegisterAddressSchema,
} from './useRegisterAddressSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerAddressInputProperties } from '../constants/inputProperties';
import { useUserAddressState } from '../../../shared/stores/redux/userAddress';
import { USER_ADDRESS_ACTION_TYPES } from '../../../shared/stores/redux/userAddress/interface';
import { useHeader } from '../../../shared/hooks/useHeader';
import { useUserState } from '../../../shared/stores/redux/user';

export const useRegisterAddressPage = () => {
    useHeader({
        title: '',
        hasTitle: false,
        shouldRenderHeader: true,
    });
    const { schema } = useRegisterAddressSchema();
    const { control, handleSubmit } = useForm<IRegisterAddressInputNames>({
        // @ts-expect-error yup expected error
        resolver: yupResolver(schema),
    });
    const {
        userAddressState: { hasError, alertMessage },
        userAddressDispatch,
    } = useUserAddressState();
    const {
        userState: { user },
    } = useUserState();

    const onSubmit = (data: IRegisterAddressInputNames) => {
        // TODO: type according input of endpoint
        const registerAddressInput = {
            city: data.city,
            complement: data.complement,
            state: data.state,
            streetName: data.streetName,
            streetNumber: data.streetNumber,
            zone: data.zone,
            id: user.id,
        };
        console.log('=======>', registerAddressInput);
    };

    const onCloseAlert = () => {
        userAddressDispatch({ type: USER_ADDRESS_ACTION_TYPES.RESET_STATE });
    };

    return {
        onSubmit,
        control,
        handleSubmit,
        inputProperties: registerAddressInputProperties,
        hasError,
        alertMessage,
        onCloseAlert,
    };
};
