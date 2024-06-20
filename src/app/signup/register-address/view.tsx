import React from 'react';
import { RegisterAddressForm, RegisterAddressWrapper } from './styles';
import designSystem from '../../shared/designSystem';
import { Controller, Control } from 'react-hook-form';
import { IInputProp } from './constants/inputProperties';
import { CustomButton } from '../../shared/components/customButton';

interface IRegisterAddressView {
    inputProperties: Array<IInputProp>;
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasError: boolean;
    onCloseAlert: () => void;
    isLoading: boolean;
    alertMessage?: string;
}

export const RegisterAddressView = ({
    onSubmit,
    inputProperties,
    control,
    hasError,
    alertMessage,
    onCloseAlert,
    isLoading,
}: IRegisterAddressView) => {
    return (
        <RegisterAddressWrapper data-testid="register-address-wrapper">
            <designSystem.alert
                data-testid="designSystem-alert"
                severity="error"
                isOpen={hasError}
                message={alertMessage}
                onClose={onCloseAlert}
            />
            <RegisterAddressForm
                data-testid="register-address-form"
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
                                        disabled={isLoading}
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
                <CustomButton
                    type="submit"
                    buttonColor="primary"
                    variant="contained"
                    disabled={isLoading}
                    fullWidth={true}
                    circularProgressColor="primary"
                    label="Salvar"
                    data-testid="submit-address-button"
                />
            </RegisterAddressForm>
        </RegisterAddressWrapper>
    );
};
