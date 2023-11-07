import React from "react";
import mainLogo from "../../assets/images/futureEatsLogo/logo-future-eats-invert.png"
import { LoginPageWrapper } from "./LoginPage.styles";

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
        <img src={mainLogo} />
        <input />
        <input />
        <button />
        <p>Nao possui cadastro? Clique aqui</p>
    </LoginPageWrapper>
  );
};
