import * as yup from 'yup';
import { errorMessages } from '../../common/constants/errorMessages';
import { cpfValidation } from './customValidations';

export function yupCustomValidationsSetup() {
    yup.addMethod(yup.string, 'cpf', cpf);
}

function cpf() {
    // @ts-expect-error callback used in a scope with 'this' and 'value' props
    return this.test('isValidCpf', errorMessages.invalidCPF, cpfValidation);
}
