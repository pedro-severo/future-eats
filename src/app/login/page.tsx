'use client';
import React from 'react';
import { LoginPageView } from './view';
import { useLoginPage } from './hooks/useLoginPage';

const Login = () => {
    const {
        onSubmitForm,
        control,
        handleSubmit,
        hasLoginError,
        onCloseAlert,
        alertMessage,
        isLoading,
    } = useLoginPage();
    return (
        <LoginPageView
            onSubmit={handleSubmit(onSubmitForm)}
            control={control}
            hasLoginError={hasLoginError}
            closeAlert={onCloseAlert}
            alertMessage={alertMessage}
            isLoading={isLoading}
        />
    );
};

export default Login;
