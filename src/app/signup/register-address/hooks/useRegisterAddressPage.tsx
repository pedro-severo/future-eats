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
import { RegisterAddressInput } from '../../../shared/services/api/registerAddress/interfaces';
import { useRegisterAddressRequest } from '../../../shared/services/api/registerAddress/useRegisterAddressRequest';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PATH from '../../../shared/constants/pathsEnum';
import { useAuthChecking } from '../../../shared/hooks/useAuthChecking';

export const useRegisterAddressPage = () => {
    useAuthChecking();
    useHeader({
        title: '',
        hasTitle: false,
        shouldRenderHeader: true,
    });
    const router = useRouter();
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

    useEffect(() => {
        if (!user.id) router.push(PATH.SIGNUP);
    }, [user, router]);

    const { handleRegisterAddress } = useRegisterAddressRequest();

    const onSubmit = (data: IRegisterAddressInputNames) => {
        const registerAddressInput: RegisterAddressInput = {
            city: data.city,
            complement: data.complement || undefined,
            state: data.state,
            streetName: data.streetName,
            streetNumber: data.streetNumber,
            zone: data.zone,
            userId: user.id,
        };
        handleRegisterAddress(registerAddressInput);
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
