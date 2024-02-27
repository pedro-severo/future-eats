import { getVerifyingDigit } from '../../utils/getCPFVerifyingDigit';

const trashList = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
];

export function cpfValidation(value: any) {
    if (typeof value !== 'string') return false;
    value = value.replace(/[\s.-]*/gim, '');
    if (value.length != 11 || trashList.includes(value)) {
        return false;
    }
    const digits = value.split('').map((el: number) => +el);
    if (
        getVerifyingDigit(digits.slice(0, 9)) === digits[9] &&
        getVerifyingDigit(digits.slice(0, 10)) === digits[10]
    )
        return true;
    else return false;
}
