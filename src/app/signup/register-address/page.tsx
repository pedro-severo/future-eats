'use client';
import React from 'react';
import { useRegisterAddressPage } from './hooks/useRegisterAddressPage';
import { RegisterAddressView } from './view';

const RegisterAddress = () => {
    const {
        inputProperties,
        control,
        onSubmitForm,
        hasError,
        alertMessage,
        onCloseAlert,
        isLoading,
    } = useRegisterAddressPage();
    return (
        <RegisterAddressView
            data-testid="register-address-view"
            onSubmit={onSubmitForm}
            control={control}
            hasError={hasError}
            alertMessage={alertMessage}
            inputProperties={inputProperties}
            onCloseAlert={onCloseAlert}
            isLoading={isLoading}
        />
    );
};

export default RegisterAddress;
