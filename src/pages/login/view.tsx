import React, { useState } from 'react';
import mainLogo from '../../assets/images/futureEatsLogo/logo-future-eats-invert.png';
import { LoginForm, LoginPageWrapper } from './styles';
import designSystem from '../../designSystem';
import { Controller, Control } from 'react-hook-form';
import { LoginInputNames } from './hooks/useLoginSchema';
import { theme } from '../../designSystem/themeProvider';
import { usePagesNavigation } from '../../hooks/usePagesNavigation';

interface ILoginPageViewProps {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
}

export const LoginPageView = ({ onSubmit, control }: ILoginPageViewProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleGoToRegisterPage } = usePagesNavigation();
    return (
        <LoginPageWrapper>
            <img src={mainLogo} />
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
            <designSystem.typography variant="subtitle1">
                Nao possui cadastro?{' '}
                <span
                    data-testid="go-to-register-button"
                    style={{ color: theme.palette.text.hint }}
                    onClick={handleGoToRegisterPage}
                >
                    Clique aqui
                </span>
            </designSystem.typography>
        </LoginPageWrapper>
    );
};
