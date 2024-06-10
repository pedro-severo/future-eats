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
import { useEffect } from 'react';
import { useNavigationHeaderState } from '../../../shared/stores/navigationHeader';

export const useRegisterAddressPage = () => {
    const { schema } = useRegisterAddressSchema();
    const { control, handleSubmit } = useForm<IRegisterAddressInputNames>({
        resolver: yupResolver(schema),
    });
    const {
        userAddressState: { hasError, alertMessage },
        userAddressDispatch,
    } = useUserAddressState();
    const { setNavigationHeader } = useNavigationHeaderState();

    const onSubmit = (data: IRegisterAddressInputNames) => {
        // TODO: type according input of endpoint
        const registerAddressInput = {
            city: data.city,
            complement: data.complement,
            state: data.state,
            streetName: data.streetName,
            streetNumber: data.streetNumber,
            zone: data.zone,
            // TODO: get id from url
            id: '',
        };
        console.log('=======>', registerAddressInput);
    };

    const onCloseAlert = () => {
        userAddressDispatch({ type: USER_ADDRESS_ACTION_TYPES.RESET_STATE });
    };

    useEffect(() => {
        setNavigationHeader({
            title: '',
            hasTitle: false,
            shouldRenderHeader: true,
        });
    }, [setNavigationHeader]);

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
