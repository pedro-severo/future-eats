import React from 'react';
import { LoginPageView } from './view';
import { useLoginPage } from './hooks/useLoginPage';

export const LoginPage = () => {
    const {
        onSubmitForm,
        control,
        handleSubmit,
        hasLoginError,
        closeAlert,
        alertMessage,
    } = useLoginPage();
    return (
        <LoginPageView
            onSubmit={handleSubmit(onSubmitForm)}
            control={control}
            hasLoginError={hasLoginError}
            closeAlert={closeAlert}
            alertMessage={alertMessage}
        />
    );
};
