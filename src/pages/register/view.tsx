import React, { useState } from "react";
import mainLogo from "../../assets/images/futureEatsLogo/logo-future-eats-invert.png";
import { RegisterForm, RegisterPageWrapper } from "./styles";
import { TextFieldInput } from "../../designSystem/components/TextField";
import { IconButton, InputAdornment, Typography } from "@material-ui/core";
import { Button } from "../../designSystem/components/Button";
import { Controller, Control } from "react-hook-form";
import { RegisterInputNames } from "./hooks/useRegisterSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { theme } from "../../designSystem/themeProvider";
import { useNavigate } from 'react-router-dom';
import { PATH } from "../../routes/paths";
import { inputProperties } from "./constants/inputProperties";

interface IRegisterPageViewProps {
  onSubmit: () => void;
  control: Control<any, any>;
}

export const RegisterPageView = ({ onSubmit, control }: IRegisterPageViewProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <RegisterPageWrapper>
      <img src={mainLogo} />
      <RegisterForm onSubmit={onSubmit}>
        <Typography variant="h2">Cadastrar</Typography>
        <Controller
          name={RegisterInputNames.NAME}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder={inputProperties.name.placeholder}
              label={inputProperties.name.label}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name={RegisterInputNames.EMAIL}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder={inputProperties.email.placeholder}
              label={inputProperties.email.label} 
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name={RegisterInputNames.CPF}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder={inputProperties.cpf.placeholder}
              label={inputProperties.cpf.label} 
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name={RegisterInputNames.PASSWORD}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder={inputProperties.password.placeholder}
              label={inputProperties.password.label}               
              type={showPassword ? "text" : "password"}
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
        <Controller
          name={RegisterInputNames.PASSWORD_CONFIRMATION}
          control={control}
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <TextFieldInput
              {...field}
              placeholder={inputProperties.passwordConfirmation.placeholder}
              label={inputProperties.passwordConfirmation.label}               
              type={showPassword ? "text" : "password"}
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
      </RegisterForm>
      <Typography variant="subtitle1">
        Nao possui cadastro?{" "}
        <span
          style={{ color: theme.palette.text.hint }}
          onClick={() => navigate(PATH.REGISTER)}
        >
          Clique aqui
        </span>
      </Typography>
    </RegisterPageWrapper>
  );
};
