import React, { useState } from 'react';
import mainLogo from '../../assets/images/futureEatsLogo/logo-future-eats-invert.png';
import { RegisterForm, RegisterPageWrapper } from './styles';
import designSystem from '../../designSystem';
import { Controller, Control } from 'react-hook-form';
import { RegisterInputNames } from './hooks/useRegisterSchema';
import { theme } from '../../designSystem/themeProvider';
import { inputProperties } from './constants/inputProperties';

interface IRegisterPageViewProps {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
}

export const RegisterPageView = ({
    onSubmit,
    control,
}: IRegisterPageViewProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);
    return (
        <RegisterPageWrapper>
            <img src={mainLogo} />
            <RegisterForm onSubmit={onSubmit}>
                <designSystem.typography variant="h2">
                    Cadastrar
                </designSystem.typography>
                <Controller
                    name={RegisterInputNames.NAME}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                placeholder={inputProperties.name.placeholder}
                                label={inputProperties.name.label}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <Controller
                    name={RegisterInputNames.EMAIL}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                placeholder={inputProperties.email.placeholder}
                                label={inputProperties.email.label}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <Controller
                    name={RegisterInputNames.CPF}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
                                placeholder={inputProperties.cpf.placeholder}
                                label={inputProperties.cpf.label}
                                error={!!error}
                                helperText={error?.message}
                            />
                        )
                    }
                />
                <Controller
                    name={RegisterInputNames.PASSWORD}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
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
                    name={RegisterInputNames.PASSWORD_CONFIRMATION}
                    control={control}
                    render={
                        // istanbul ignore next
                        ({ field, fieldState: { error } }) => (
                            <designSystem.textFieldInput
                                {...field}
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
                <designSystem.button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth={true}
                >
                    Criar
                </designSystem.button>
            </RegisterForm>
        </RegisterPageWrapper>
    );
};
