'use client';
import { useForm } from 'react-hook-form';
import { useLoginSchema } from './useLoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginRequest } from '../../shared/services/api/login/useLoginRequest';
import { LoginInput } from '../../shared/services/api/login/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';
import { useUserState } from '../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../shared/stores/redux/user/interface';
import { useNavigationHeaderState } from '../../shared/stores/navigationHeader';
import { useEffect } from 'react';

export const useLoginPage = () => {
    const { schema } = useLoginSchema();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        resolver: yupResolver(schema),
    });
    const { handleLogin } = useLoginRequest();
    const {
        userState: { hasError, alertMessage },
        userDispatch,
    } = useUserState();
    const { setNavigationHeader } = useNavigationHeaderState();

    const onSubmit = async (loginInput: LoginInput) => {
        handleLogin(loginInput);
    };

    const onCloseAlert = () => {
        userDispatch({ type: USER_ACTION_TYPES.RESET_STATE });
    };

    useEffect(() => {
        setNavigationHeader({
            title: '',
            hasTitle: false,
            shouldRenderHeader: false,
        });
    }, [setNavigationHeader]);

    return {
        onSubmitForm: onSubmit,
        control,
        handleSubmit,
        hasLoginError: hasError,
        onCloseAlert,
        alertMessage,
    };
};
