import React from 'react';
import { LoginForm, LoginPageWrapper } from './styles';
import designSystem from '../shared/designSystem';
import { Controller, Control } from 'react-hook-form';
import { LoginInputNames } from './hooks/useLoginSchema';
import { theme } from '../shared/designSystem/themeProvider';
import { MainLogo } from '../shared/components/mainLogo';
import { CallToSignup } from './components/callToSignup';
import { CustomButton } from '../shared/components/customButton';
import { PasswordInput } from '../shared/components/passwordInput';

interface ILoginPageView {
    onSubmit: () => void;
    // eslint-disable-next-line
    control: Control<any, any>;
    hasLoginError: boolean;
    closeAlert: () => void;
    isLoading: boolean;
    navigateToSignup: () => void;
    alertMessage?: string;
}

const MemoLoginPageView = ({
    onSubmit,
    control,
    hasLoginError,
    closeAlert,
    alertMessage,
    isLoading,
    navigateToSignup,
}: ILoginPageView) => {
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
                <PasswordInput
                    inputName={LoginInputNames.PASSWORD}
                    control={control}
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    disable={isLoading}
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
                action={navigateToSignup}
                callToActionLinkColor={theme.palette.text.hint}
            />
        </LoginPageWrapper>
    );
};

export const LoginView = React.memo(MemoLoginPageView);
