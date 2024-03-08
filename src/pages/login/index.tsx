import React from 'react';
import { LoginPageView } from './view';
import { useLoginPage } from './hooks/useLoginPage';

export const LoginPage = () => {
    const { onSubmitForm, control, handleSubmit } = useLoginPage();
    return (
        <LoginPageView
            onSubmit={handleSubmit(onSubmitForm)}
            control={control}
        />
    );
};
