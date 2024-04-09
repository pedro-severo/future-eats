import { useMemo } from 'react';
import * as yup from 'yup';
import { IFormInputNames } from '../interfaces/FormInputNames';
import { errorMessages } from '../../../common/constants/errorMessages';

interface IUseSchemaResponse {
    schema: yup.ObjectSchema<IFormInputNames>;
}

export enum SignupInputNames {
    NAME = 'name',
    EMAIL = 'email',
    CPF = 'cpf',
    PASSWORD = 'password',
    PASSWORD_CONFIRMATION = 'passwordConfirmation',
}

export const useSignupSchema = (): IUseSchemaResponse => {
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
                .oneOf(
                    [yup.ref(SignupInputNames.PASSWORD), undefined],
                    errorMessages.unmatchedPasswordConfirmation
                )
                .required(errorMessages.requiredField),
            name: yup
                .string()
                .required(errorMessages.requiredField)
                .matches(/^[a-z ,.'-]+$/i, {
                    message: errorMessages.invalidName,
                }),
            cpf: yup
                .string()
                // @ts-expect-error custom validation method
                .cpf(),
        });
    }, [yup]);

    // @ts-expect-error schema with a custom validation method
    return { schema };
};
