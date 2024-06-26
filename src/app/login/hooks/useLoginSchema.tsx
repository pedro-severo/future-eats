import { useMemo } from 'react';
import * as yup from 'yup';
import { errorMessages } from '../../shared/constants/errorMessages';
import { IFormInputNames } from '../interfaces/FormInputNames';

interface IUseSchemaResponse {
    schema: yup.ObjectSchema<IFormInputNames>;
}

export enum LoginInputNames {
    PASSWORD = 'password',
    EMAIL = 'email',
}

export const useLoginSchema = (): IUseSchemaResponse => {
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
        });
    }, [yup]);

    return { schema };
};
