'use client';
import React, { useState } from 'react';
import { LoginForm, LoginPageWrapper } from './styles';
import designSystem from '../designSystem';
import { Controller, Control } from 'react-hook-form';
import { LoginInputNames } from './hooks/useLoginSchema';
import { theme } from '../designSystem/themeProvider';
import { MainLogo } from '../common/components/mainLogo';
import { CallToSignup } from './components/callToSignup';

interface ILoginPageView {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasLoginError: boolean;
    closeAlert: () => void;
    alertMessage?: string;
}

export const LoginPageView = ({
    onSubmit,
    control,
    hasLoginError,
    closeAlert,
    alertMessage,
}: ILoginPageView) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <LoginPageWrapper>
            <designSystem.alert
                severity="error"
                isOpen={hasLoginError}
                message={alertMessage}
                onClose={closeAlert}
            />
            <MainLogo />
            <LoginForm onSubmit={onSubmit}>
                <designSystem.typography variant="h2">
                    Entrar
                </designSystem.typography>
                <Controller
                    name={LoginInputNames.EMAIL}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                placeholder="email@email.com"
                                label="E-mail"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <Controller
                    name={LoginInputNames.PASSWORD}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                placeholder="Mínimo 6 caracteres"
                                type={showPassword ? 'text' : 'password'}
                                label="Senha"
                                error={!!error}
                                helperText={error?.message}
                                InputProps={{
                                    endAdornment: (
                                        <designSystem.inputAdornment position="start">
                                            <designSystem.iconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => {
                                                    setShowPassword(
                                                        !showPassword
                                                    );
                                                }}
                                                edge="end"
                                                id="password-visibility-icon-button"
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
                <designSystem.button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                >
                    Entrar
                </designSystem.button>
            </LoginForm>
            <CallToSignup
                action={() => null}
                callToActionLinkColor={theme.palette.text.hint}
            />
        </LoginPageWrapper>
    );
};
