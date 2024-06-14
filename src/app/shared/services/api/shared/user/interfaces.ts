export interface UserDTO {
    id?: string;
    name?: string;
    email?: string;
    hasAddress?: boolean;
    cpf?: string;
}

export interface UserAddressDTO {
    city?: string;
    complement?: string;
    state?: string;
    streetNumber?: string;
    zone?: string;
    streetName?: string;
    id?: string;
}
