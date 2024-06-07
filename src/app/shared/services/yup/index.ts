import * as yup from 'yup';
import { errorMessages } from '../../constants/errorMessages';
import { cpfValidation } from './customValidations';

export function yupCustomValidationsSetup() {
    console.log('OLAAAR');
    yup.addMethod(yup.string, 'cpf', cpf);
}

// istanbul ignore next
function cpf() {
    // @ts-expect-error callback used in a scope with 'this' and 'value' props
    return this.test('isValidCpf', errorMessages.invalidCPF, cpfValidation);
}
