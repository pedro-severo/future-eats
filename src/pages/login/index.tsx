import React from 'react';
import { useLoginSchema } from './hooks/useLoginSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormInputNames } from './interfaces/FormInputNames';
import { LoginPageView } from './view';

export const LoginPage = () => {
    // TODO: Create a eslint configuration. Look this link: https://www.geeksforgeeks.org/how-to-configure-eslint-for-react-projects/
    const { schema } = useLoginSchema();
    const {
        control,
        handleSubmit,
        // @ts-expect-error: expected to works with yup lib
    } = useForm<IFormInputNames>({ resolver: yupResolver(schema) });

    const onSubmit = () => {
        // TODO: Implement function
    };

    return (
        <LoginPageView onSubmit={handleSubmit(onSubmit)} control={control} />
    );
};
