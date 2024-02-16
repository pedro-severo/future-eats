import React from 'react';
import { useRegisterSchema } from './hooks/useRegisterSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputNames } from './interfaces/FormInputNames';
import { RegisterPageView } from './view';

export const RegisterPage = () => {
    const { schema } = useRegisterSchema();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        // TODO: Check password and passwordConfirmation match before anithing
        // TODO: Implement function
    };

    return (
        <RegisterPageView onSubmit={handleSubmit(onSubmit)} control={control} />
    );
};
