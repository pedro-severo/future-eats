import { useForm } from 'react-hook-form';
import { useLoginSchema } from './useLoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginRequest } from '../../../api/login/useLoginRequest';
import { LoginInput } from '../../../api/login/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';

export const useLoginPage = () => {
    const { schema } = useLoginSchema();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        resolver: yupResolver(schema),
    });
    const { handleLogin } = useLoginRequest();

    const onSubmit = async (loginInput: LoginInput) => {
        handleLogin(loginInput);
    };

    return {
        onSubmitForm: onSubmit,
        control,
        handleSubmit,
    };
};
