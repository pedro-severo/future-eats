'use client';
import React from 'react';
import { LoginView } from './view';
import { useLoginPage } from './hooks/useLoginPage';

const Login = () => {
    const {
        onSubmitForm,
        control,
        hasLoginError,
        onCloseAlert,
        alertMessage,
        isLoading,
        navigateToSignup,
    } = useLoginPage();
    return (
        <LoginView
            onSubmit={onSubmitForm}
            control={control}
            hasLoginError={hasLoginError}
            closeAlert={onCloseAlert}
            alertMessage={alertMessage}
            isLoading={isLoading}
            navigateToSignup={navigateToSignup}
        />
    );
};

export default Login;
