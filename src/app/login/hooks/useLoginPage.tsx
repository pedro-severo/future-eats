import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoginSchema } from './useLoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginRequest } from '../../shared/services/api/login/useLoginRequest';
import { LoginInput } from '../../shared/services/api/login/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';
import { useUserState } from '../../shared/stores/redux/user';
import { USER_ACTION_TYPES } from '../../shared/stores/redux/user/interface';
import { useUnprotectedPage } from '../../shared/hooks/useUnprotectedPage';
import { useNavigationHeaderState } from '../../shared/stores/navigationHeader';
import PATH from '../../shared/constants/pathsEnum';
import { useRouter } from 'next/navigation';

export const useLoginPage = () => {
    useUnprotectedPage();
    const { setNavigationHeader } = useNavigationHeaderState();
    const { schema } = useLoginSchema();
    const router = useRouter();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        // @ts-expect-error yup expected error
        resolver: yupResolver(schema),
    });
    const { handleLogin } = useLoginRequest();
    const {
        userState: { hasError, alertMessage, isLoading },
        userDispatch,
    } = useUserState();

    const onSubmit = useCallback(
        async (loginInput: LoginInput) => {
            await handleLogin(loginInput);
        },
        [handleLogin]
    );

    const onCloseAlert = useCallback(() => {
        userDispatch({ type: USER_ACTION_TYPES.RESET_STATE });
    }, []);

    useEffect(() => {
        setNavigationHeader({
            title: '',
            shouldRenderHeader: false,
            shouldRenderBackIcon: false,
        });
    }, []);

    const navigateToSignup = useCallback(() => {
        router.push(PATH.SIGNUP);
    }, []);

    // call handleSubmit(onSubmit) inside a arrow function is not working
    const onSubmitForm = useCallback(handleSubmit(onSubmit), [
        handleSubmit,
        onSubmit,
    ]);

    return {
        onSubmitForm,
        control,
        hasLoginError: hasError,
        onCloseAlert,
        alertMessage,
        isLoading,
        navigateToSignup,
        // exposing onSubmit function to be able to test it, because currently is not possible to test onSubmitForm function,
        // once his call back function is the directly invoking of handleSubmit, for reasons already exposed on onSubmitForm nomination
        onSubmit,
    };
};
