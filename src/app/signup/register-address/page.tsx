'use client';
import React from 'react';
import { useRegisterAddressPage } from './hooks/useRegisterAddressPage';
import { RegisterAddressView } from './view';

const RegisterAddress = () => {
    const {
        inputProperties,
        control,
        handleSubmit,
        onSubmit,
        hasError,
        alertMessage,
        onCloseAlert,
        isLoading,
    } = useRegisterAddressPage();
    return (
        <RegisterAddressView
            onSubmit={handleSubmit(onSubmit)}
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
