'use client';
import React from 'react';
import { RegisterAddressForm, RegisterAddressWrapper } from './styles';
import designSystem from '../../shared/designSystem';
import { Controller, Control } from 'react-hook-form';
import { IInputProp } from './constants/inputProperties';

interface IRegisterAddressView {
    inputProperties: Array<IInputProp>;
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasError: boolean;
    onCloseAlert: () => void;
    alertMessage?: string;
}

export const RegisterAddressView = ({
    onSubmit,
    inputProperties,
    control,
    hasError,
    alertMessage,
    onCloseAlert,
}: IRegisterAddressView) => {
    return (
        <RegisterAddressWrapper data-testid="RegisterAddressWrapper">
            <designSystem.alert
                data-testid="designSystem.alert"
                severity="error"
                isOpen={hasError}
                message={alertMessage}
                onClose={onCloseAlert}
            />
            <RegisterAddressForm
                data-testid="RegisterAddressForm"
                onSubmit={onSubmit}
            >
                <designSystem.typography variant="h2">
                    Registrar endereço
                </designSystem.typography>
                {inputProperties.map((inputProp, index) => {
                    return (
                        <Controller
                            key={index}
                            name={inputProp.name}
                            control={control}
                            render={
                                // istanbul ignore next
                                ({ field, fieldState: { error } }) => (
                                    <designSystem.textFieldInput
                                        {...field}
                                        placeholder={inputProp.placeholder}
                                        label={inputProp.label}
                                        error={!!error}
                                        helperText={error?.message}
                                    />
                                )
                            }
                        />
                    );
                })}
                {/* TODO: Create a custom button on shared components and use it here, on signup and login form */}
                <designSystem.button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                >
                    Salvar
                </designSystem.button>
                {/* TODO: Create a go to login button */}
            </RegisterAddressForm>
        </RegisterAddressWrapper>
    );
};
