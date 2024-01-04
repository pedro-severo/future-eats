import React, { useState } from 'react';
import mainLogo from '../../assets/images/futureEatsLogo/logo-future-eats-invert.png';
import { LoginForm, LoginPageWrapper } from './styles';
import { TextFieldInput } from '../../designSystem/components/TextField';
import { IconButton, InputAdornment, Typography } from '@material-ui/core';
import { Button } from '../../designSystem/components/Button';
import { Controller, Control } from 'react-hook-form';
import { LoginInputNames } from './hooks/useLoginSchema';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { theme } from '../../designSystem/themeProvider';
import { PATH } from '../../routes/paths';
import { usePagesNavigation } from '../../hooks/usePagesNavigation';

interface ILoginPageViewProps {
    onSubmit: () => void;
    control: Control<any, any>;
}

export const LoginPageView = ({ onSubmit, control }: ILoginPageViewProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { handleGoToRegisterPage } = usePagesNavigation();
    return (
        <LoginPageWrapper>
            <img src={mainLogo} />
            <LoginForm onSubmit={onSubmit}>
                <Typography variant="h2">Entrar</Typography>
                <Controller
                    name={LoginInputNames.EMAIL}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextFieldInput
                            {...field}
                            placeholder="email@email.com"
                            label="E-mail"
                            error={!!error}
                            helperText={error?.message}
                        />
                    )}
                />
                <Controller
                    name={LoginInputNames.PASSWORD}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextFieldInput
                            {...field}
                            placeholder="Mínimo 6 caracteres"
                            type={showPassword ? 'text' : 'password'}
                            label="Senha"
                            error={!!error}
                            helperText={error?.message}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ?
                                                <VisibilityOff
                                                    style={{
                                                        color: `${theme.palette.secondary.main}`,
                                                    }}
                                                />
                                            :   <Visibility
                                                    style={{
                                                        color: `${theme.palette.secondary.main}`,
                                                    }}
                                                />
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                >
                    Entrar
                </Button>
            </LoginForm>
            <Typography variant="subtitle1">
                Nao possui cadastro?{' '}
                <span
                    style={{ color: theme.palette.text.hint }}
                    onClick={handleGoToRegisterPage}
                >
                    Clique aqui
                </span>
            </Typography>
        </LoginPageWrapper>
    );
};
