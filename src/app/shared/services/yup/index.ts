import * as yup from 'yup';
import { errorMessages } from '../../constants/errorMessages';
import { cpfValidation } from './customValidations';

export function yupCustomValidationsSetup() {
    yup.addMethod(yup.string, 'cpf', cpf);
}

// istanbul ignore next
function cpf() {
    return this.test('isValidCpf', errorMessages.invalidCPF, cpfValidation);
}
