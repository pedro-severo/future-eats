enum RegisterAddressInputNames {
    streetName = 'streetName',
    streetNumber = 'streetNumber',
    complement = 'complement',
    zone = 'zone',
    city = 'city',
    state = 'state',
}

enum RegisterAddressInputPlaceholders {
    city = 'Cidade',
    complement = 'Apto./Bloco',
    state = 'Estado',
    streetName = 'Rua/Av.',
    streetNumber = 'Número',
    zone = 'Bairro',
}

enum RegisterAddressInputLabels {
    city = 'Cidade*',
    complement = 'Complemento',
    state = 'Estado*',
    streetName = 'Logadouro*',
    streetNumber = 'Número*',
    zone = 'Bairro*',
}

export interface IInputProp {
    key: RegisterAddressInputNames;
    name: RegisterAddressInputNames;
    placeholder: string;
    label: string;
}

export const registerAddressInputProperties: Array<IInputProp> = Object.values(
    RegisterAddressInputNames
).map((value) => {
    return {
        key: value,
        name: value,
        placeholder: RegisterAddressInputPlaceholders[value],
        label: RegisterAddressInputLabels[value],
    };
});
