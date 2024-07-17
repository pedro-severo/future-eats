import React from 'react';
import { SignupForm, SignupPageWrapper } from './styles';
import designSystem from '../shared/designSystem';
import { Controller, Control } from 'react-hook-form';
import { SignupInputNames } from './hooks/useSignupSchema';
import { inputProperties } from './interfaces/inputProperties';
import { MainLogo } from '../shared/components/mainLogo';
import { CustomButton } from '../shared/components/customButton';
import { PasswordInput } from '../shared/components/passwordInput';

interface ISignupPageView {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasSignupError: boolean;
    closeAlert: () => void;
    navigateToLogin: () => void;
    isLoading: boolean;
    alertMessage?: string;
}

const MemoSignupPageView = ({
    onSubmit,
    control,
    hasSignupError,
    closeAlert,
    alertMessage,
    isLoading,
    navigateToLogin,
}: ISignupPageView) => {
    return (
        <SignupPageWrapper>
            <designSystem.alert
                severity="error"
                isOpen={hasSignupError}
                message={alertMessage}
                onClose={closeAlert}
            />
            <MainLogo />
            <SignupForm onSubmit={onSubmit}>
                <designSystem.typography variant="h2">
                    Cadastrar
                </designSystem.typography>
                <Controller
                    name={SignupInputNames.NAME}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                disabled={isLoading}
                                placeholder={inputProperties.name.placeholder}
                                label={inputProperties.name.label}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <Controller
                    name={SignupInputNames.EMAIL}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                disabled={isLoading}
                                placeholder={inputProperties.email.placeholder}
                                label={inputProperties.email.label}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <Controller
                    name={SignupInputNames.CPF}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                disabled={isLoading}
                                placeholder={inputProperties.cpf.placeholder}
                                label={inputProperties.cpf.label}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <PasswordInput
                    inputName={SignupInputNames.PASSWORD}
                    control={control}
                    disable={isLoading}
                    label={inputProperties.password.label}
                    placeholder={inputProperties.password.placeholder}
                />
                <PasswordInput
                    inputName={SignupInputNames.PASSWORD_CONFIRMATION}
                    control={control}
                    disable={isLoading}
                    label={inputProperties.passwordConfirmation.label}
                    placeholder={
                        inputProperties.passwordConfirmation.placeholder
                    }
                />
                <CustomButton
                    type="submit"
                    buttonColor="primary"
                    variant="contained"
                    fullWidth={true}
                    disabled={isLoading}
                    circularProgressColor="primary"
                    label="Registrar"
                    data-testid="submit-signup-button"
                />
            </SignupForm>
            <CustomButton
                type="button"
                buttonColor="primary"
                variant="outlined"
                fullWidth={true}
                label="Voltar para Login"
                data-testid="go-to-login-button"
                onClick={navigateToLogin}
            />
        </SignupPageWrapper>
    );
};

export const SignupPageView = React.memo(MemoSignupPageView);
