import React, { useState } from 'react';
import { LoginForm, LoginPageWrapper } from './styles';
import designSystem from '../shared/designSystem';
import { Controller, Control } from 'react-hook-form';
import { LoginInputNames } from './hooks/useLoginSchema';
import { theme } from '../shared/designSystem/themeProvider';
import { MainLogo } from '../shared/components/mainLogo';
import { CallToSignup } from './components/callToSignup';
import { useRouter } from 'next/navigation';
import PATH from '../shared/constants/pathsEnum';
import { CustomButton } from '../shared/components/customButton';

interface ILoginPageView {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasLoginError: boolean;
    closeAlert: () => void;
    isLoading: boolean;
    alertMessage?: string;
}

export const LoginPageView = ({
    onSubmit,
    control,
    hasLoginError,
    closeAlert,
    alertMessage,
    isLoading,
}: ILoginPageView) => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
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
                                disabled={isLoading}
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
                                disabled={isLoading}
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
                <CustomButton
                    type="submit"
                    buttonColor="primary"
                    variant="contained"
                    fullWidth={true}
                    disabled={isLoading}
                    circularProgressColor="primary"
                    label="Entrar"
                    data-testid="submit-login-button"
                />
            </LoginForm>
            <CallToSignup
                action={() => router.push(PATH.SIGNUP)}
                callToActionLinkColor={theme.palette.text.hint}
            />
        </LoginPageWrapper>
    );
};
