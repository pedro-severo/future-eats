import { useForm } from 'react-hook-form';
import { useSignupSchema } from './useSignupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSignupRequest } from '../../shared/services/api/signup/useSignupRequest';
import { SignupInput } from '../../shared/services/api/signup/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';
import { USER_ACTION_TYPES } from '../../shared/stores/redux/user/interface';
import { useUserState } from '../../shared/stores/redux/user';
import { useHeader } from '../../shared/hooks/useHeader';
import { useUnprotectedPage } from '../../shared/hooks/useUnprotectedPage';

export const useSignupPage = () => {
    useUnprotectedPage();
    useHeader({
        title: '',
        shouldRenderHeader: true,
    });
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

    const onSubmit = (data: IFormInputNames) => {
        const signupInput: SignupInput = {
            name: data.name,
            email: data.email,
            password: data.password,
            cpf: data.cpf,
        };
        handleSignup(signupInput);
    };

    const onCloseAlert = () => {
        userDispatch({ type: USER_ACTION_TYPES.RESET_STATE });
    };

    return {
        onSubmitForm: onSubmit,
        control,
        handleSubmit,
        hasSignupError: hasError,
        alertMessage,
        onCloseAlert,
        isLoading,
    };
};
