import { useForm } from 'react-hook-form';
import { useRegisterSchema } from './useRegisterSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterRequest } from '../../../services/api/register/useRegisterRequest';
import { RegisterInput } from '../../../services/api/register/interface';
import { IFormInputNames } from '../interfaces/FormInputNames';

export const useRegisterPage = () => {
    const { schema } = useRegisterSchema();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        resolver: yupResolver(schema),
    });
    const { handleRegister } = useRegisterRequest();

    const onSubmit = (data: IFormInputNames) => {
        const registerInput: RegisterInput = {
            name: data.name,
            email: data.email,
            password: data.password,
            cpf: data.cpf,
        };
        handleRegister(registerInput);
    };

    return {
        onSubmitForm: onSubmit,
        control,
        handleSubmit,
    };
};
