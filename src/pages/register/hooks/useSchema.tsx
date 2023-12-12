import { useMemo } from "react";
import * as yup from "yup";
import { IFormInputNames } from "../interfaces/FormInputNames";
import { errorMessages } from "../../../common/constants/errorMessages";

interface IUseSchemaResponse {
  schema: yup.ObjectSchema<IFormInputNames>;
}

export enum LoginInputNames {
  NAME = "name",
  EMAIL = "email",
  CPF = "cpf",
  PASSWORD = "password",
  PASSWORD_CONFIRMATION = "passwordConfirmation",
}

export const useSchema = (): IUseSchemaResponse => {
  const schema = useMemo(() => {
    return yup.object<IFormInputNames>().shape({
      password: yup
        .string()
        .required(errorMessages.requiredField)
        .min(6, errorMessages.invalidPassword),
      email: yup
        .string()
        .email(errorMessages.invalidEmail)
        .required(errorMessages.requiredField),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref(LoginInputNames.PASSWORD), undefined], errorMessages.unmatchedPasswordConfirmation),
      name: yup
        .string()
        .required(errorMessages.requiredField)
        .matches(/^[a-z ,.'-]+$/i),
      cpf: yup
        .string()
        .required(errorMessages.requiredField)
        .matches(/^[0-9]*$/i),
  });
  }, [yup]);

  return { schema };
};
