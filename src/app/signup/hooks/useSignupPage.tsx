import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignupSchema } from './useSignupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignupRequest } from '../../shared/services/api/signup/useSignupRequest';
import { SignupInput } from '../../shared/services/api/signup/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';
import { USER_ACTION_TYPES } from '../../shared/stores/redux/user/interface';
import { useUserState } from '../../shared/stores/redux/user';
import { useUnprotectedPage } from '../../shared/hooks/useUnprotectedPage';
import { useNavigationHeaderState } from '../../shared/stores/navigationHeader';
import { useRouter } from 'next/navigation';
import PATH from '../../shared/constants/pathsEnum';

export const useSignupPage = () => {
    useUnprotectedPage();
    const router = useRouter();
    const { setNavigationHeader } = useNavigationHeaderState();
    const { schema } = useSignupSchema();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        // @ts-expect-error yup expected error
        resolver: yupResolver(schema),
    });
    const { handleSignup } = useSignupRequest();
    const {
        userState: { hasError, alertMessage, isLoading },
        userDispatch,
    } = useUserState();

    const onSubmit = useCallback(
        async (data: IFormInputNames) => {
            const signupInput: SignupInput = {
                name: data.name,
                email: data.email,
                password: data.password,
                cpf: data.cpf,
            };
            await handleSignup(signupInput);
        },
        [handleSignup]
    );

    const onCloseAlert = useCallback(() => {
        userDispatch({ type: USER_ACTION_TYPES.RESET_STATE });
    }, []);

    useEffect(() => {
        setNavigationHeader({
            title: '',
            shouldRenderBackIcon: true,
            shouldRenderHeader: true,
        });
    }, []);

    const navigateToLogin = useCallback(() => {
        router.push(PATH.LOGIN);
    }, []);

    const onSubmitForm = useCallback(handleSubmit(onSubmit), [
        handleSubmit,
        onSubmit,
    ]);

    return {
        onSubmitForm,
        control,
        handleSubmit,
        hasSignupError: hasError,
        alertMessage,
        onCloseAlert,
        isLoading,
        navigateToLogin,
    };
};
