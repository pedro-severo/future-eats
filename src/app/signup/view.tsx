import React, { useState } from 'react';
import { SignupForm, SignupPageWrapper } from './styles';
import designSystem from '../shared/designSystem';
import { Controller, Control } from 'react-hook-form';
import { SignupInputNames } from './hooks/useSignupSchema';
import { theme } from '../shared/designSystem/themeProvider';
import { inputProperties } from './constants/inputProperties';
import { MainLogo } from '../shared/components/mainLogo';
import { CustomButton } from '../shared/components/customButton';
import { useRouter } from 'next/navigation';
import PATH from '../shared/constants/pathsEnum';

interface ISignupPageView {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasSignupError: boolean;
    closeAlert: () => void;
    isLoading: boolean;
    alertMessage?: string;
}

export const SignupPageView = ({
    onSubmit,
    control,
    hasSignupError,
    closeAlert,
    alertMessage,
    isLoading,
}: ISignupPageView) => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);
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
                <Controller
                    name={SignupInputNames.PASSWORD}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                disabled={isLoading}
                                placeholder={
                                    inputProperties.password.placeholder
                                }
                                label={inputProperties.password.label}
                                type={showPassword ? 'text' : 'password'}
                                error={!!error}
                                helperText={error?.message}
                                InputProps={{
                                    endAdornment: (
                                        <designSystem.inputAdornment position="start">
                                            <designSystem.iconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                edge="end"
                                            >
                                                {showPassword ?
                                                    <designSystem.visibilityOffIcon
                                                        style={{
                                                            color: `${theme.palette.secondary.main}`,
                                                        }}
                                                    />
                                                :   <designSystem.visibilityIcon
                                                        style={{
                                                            color: `${theme.palette.secondary.main}`,
                                                        }}
                                                    />
                                                }
                                            </designSystem.iconButton>
                                        </designSystem.inputAdornment>
                                    ),
                                }}
                            />
                        )
                    }
                />
                <Controller
                    name={SignupInputNames.PASSWORD_CONFIRMATION}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                disabled={isLoading}
                                placeholder={
                                    inputProperties.passwordConfirmation
                                        .placeholder
                                }
                                label={
                                    inputProperties.passwordConfirmation.label
                                }
                                type={
                                    showPasswordConfirmation ? 'text' : (
                                        'password'
                                    )
                                }
                                error={!!error}
                                helperText={error?.message}
                                InputProps={{
                                    endAdornment: (
                                        <designSystem.inputAdornment position="start">
                                            <designSystem.iconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>
                                                    setShowPasswordConfirmation(
                                                        !showPasswordConfirmation
                                                    )
                                                }
                                                edge="end"
                                            >
                                                {showPasswordConfirmation ?
                                                    <designSystem.visibilityOffIcon
                                                        style={{
                                                            color: `${theme.palette.secondary.main}`,
                                                        }}
                                                    />
                                                :   <designSystem.visibilityIcon
                                                        style={{
                                                            color: `${theme.palette.secondary.main}`,
                                                        }}
                                                    />
                                                }
                                            </designSystem.iconButton>
                                        </designSystem.inputAdornment>
                                    ),
                                }}
                            />
                        )
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
                onClick={() => router.push(PATH.LOGIN)}
            />
        </SignupPageWrapper>
    );
};
