'use client';
import { useForm } from 'react-hook-form';
import { useLoginSchema } from './useLoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginRequest } from '../../shared/services/api/login/useLoginRequest';
import { LoginInput } from '../../shared/services/api/login/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';
import { useUserState } from '../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../shared/stores/redux/user/interface';

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

    const onSubmit = async (loginInput: LoginInput) => {
        handleLogin(loginInput);
    };

    const onCloseAlert = () => {
        userDispatch({ type: USER_ACTION_TYPES.RESET_STATE });
    };

    return {
        onSubmitForm: onSubmit,
        control,
        handleSubmit,
        hasLoginError: hasError,
        onCloseAlert,
        alertMessage,
    };
};
