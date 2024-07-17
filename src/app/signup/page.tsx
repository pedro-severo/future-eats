'use client';
import React from 'react';
import { SignupPageView } from './view';
import { useSignupPage } from './hooks/useSignupPage';

const Signup = () => {
    const {
        onSubmitForm,
        control,
        hasSignupError,
        onCloseAlert,
        alertMessage,
        isLoading,
        navigateToLogin,
    } = useSignupPage();
    return (
        <SignupPageView
            onSubmit={onSubmitForm}
            control={control}
            hasSignupError={hasSignupError}
            closeAlert={onCloseAlert}
            alertMessage={alertMessage}
            isLoading={isLoading}
            navigateToLogin={navigateToLogin}
        />
    );
};

export default Signup;
