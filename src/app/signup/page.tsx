'use client';
import React from 'react';
import { SignupPageView } from './view';
import { useSignupPage } from './hooks/useSignupPage';

const Signup = () => {
    const {
        handleSubmit,
        onSubmitForm,
        control,
        hasSignupError,
        onCloseAlert,
        alertMessage,
        isLoading,
    } = useSignupPage();

    return (
        <SignupPageView
            onSubmit={handleSubmit(onSubmitForm)}
            control={control}
            hasSignupError={hasSignupError}
            closeAlert={onCloseAlert}
            alertMessage={alertMessage}
            isLoading={isLoading}
        />
    );
};

export default Signup;
