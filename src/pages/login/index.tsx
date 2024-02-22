import React from 'react';
import { useLoginSchema } from './hooks/useLoginSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputNames } from './interfaces/FormInputNames';
import { LoginPageView } from './view';

export const LoginPage = () => {
    const { schema } = useLoginSchema();
    const { control, handleSubmit } = useForm<IFormInputNames>({
        resolver: yupResolver(schema),
    });

    // istanbul ignore next
    const onSubmit = () => {
        // TODO: Implement function
    };

    return (
        <LoginPageView onSubmit={handleSubmit(onSubmit)} control={control} />
    );
};
