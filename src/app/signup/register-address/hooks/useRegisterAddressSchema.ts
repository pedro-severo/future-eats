import { useMemo } from 'react';
import * as yup from 'yup';
import { errorMessages } from '../../../shared/constants/errorMessages';

// istanbul ignore file
export interface IRegisterAddressInputNames {
    city: string;
    complement: string;
    state: string;
    streetName: string;
    streetNumber: string;
    zone: string;
}

interface IUseSchemaResponse {
    schema: yup.ObjectSchema<IRegisterAddressInputNames>;
}

export const useRegisterAddressSchema = (): IUseSchemaResponse => {
    const schema = useMemo(() => {
        return yup.object<IRegisterAddressInputNames>().shape({
            city: yup.string().required(errorMessages.requiredField),
            complement: yup.string(),
            state: yup.string().required(errorMessages.requiredField),
            streetName: yup.string().required(errorMessages.requiredField),
            streetNumber: yup.string().required(errorMessages.requiredField),
            zone: yup.string().required(errorMessages.requiredField),
        });
    }, []);

    return { schema };
};
