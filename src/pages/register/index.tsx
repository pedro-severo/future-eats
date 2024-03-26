import React from 'react';
import { RegisterPageView } from './view';
import { useRegisterPage } from './hooks/useRegisterPage';

export const RegisterPage = () => {
    const {
        handleSubmit,
        onSubmitForm,
        control,
        hasSignupError,
        onCloseAlert,
        alertMessage,
    } = useRegisterPage();

    return (
        <RegisterPageView
            onSubmit={handleSubmit(onSubmitForm)}
            control={control}
            hasSignupError={hasSignupError}
            closeAlert={onCloseAlert}
            alertMessage={alertMessage}
        />
    );
};
