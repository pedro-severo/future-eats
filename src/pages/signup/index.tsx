import React from 'react';
import { SignupPageView } from './view';
import { useSignupPage } from './hooks/useSignupPage';

export const SignupPage = () => {
    const {
        handleSubmit,
        onSubmitForm,
        control,
        hasSignupError,
        onCloseAlert,
        alertMessage,
    } = useSignupPage();

    return (
        <SignupPageView
            onSubmit={handleSubmit(onSubmitForm)}
            control={control}
            hasSignupError={hasSignupError}
            closeAlert={onCloseAlert}
            alertMessage={alertMessage}
        />
    );
};
