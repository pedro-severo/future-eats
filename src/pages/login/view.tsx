import React, { useState } from "react";
import mainLogo from "../../assets/images/futureEatsLogo/logo-future-eats-invert.png";
import { LoginForm, LoginPageWrapper } from "./styles";
import { TextFieldInput } from "../../designSystem/components/TextField";
import { IconButton, InputAdornment, Typography } from "@material-ui/core";
import { Button } from "../../designSystem/components/Button";
import { Controller, Control } from "react-hook-form";
import { LoginInputNames } from "./hooks/useSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { theme } from "../../designSystem/themeProvider";

interface ILoginPageViewProps {
  onSubmit: () => void;
  control: Control<any, any>;
}

export const LoginPageView = ({ onSubmit, control }: ILoginPageViewProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <LoginPageWrapper>
      <img src={mainLogo} />
      <LoginForm onSubmit={onSubmit}>
        <Typography variant="h2">Entrar</Typography>
        <Controller
          name={LoginInputNames.EMAIL}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder="email@email.com"
              required
              label="E-mail"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name={LoginInputNames.PASSWORD}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder="Mínimo 6 caracteres"
              type={showPassword ? "text" : "password"}
              required
              label="Senha"
              error={!!error}
              helperText={error?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff
                          style={{ color: `${theme.palette.secondary.main}` }}
                        />
                      ) : (
                        <Visibility
                          style={{ color: `${theme.palette.secondary.main}` }}
                        />
                      )}
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
      {/* TODO: implement "go to register" logic */}
      <Typography variant="subtitle1">
        Nao possui cadastro? Clique aqui
      </Typography>
    </LoginPageWrapper>
  );
};
