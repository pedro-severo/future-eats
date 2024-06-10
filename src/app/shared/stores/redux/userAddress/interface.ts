export interface UserAddress {
    userId: string;
    city: string;
    complement: string;
    state: string;
    streetNumber: string;
    zone: string;
    streetName: string;
}

export interface UserAddressState {
    userAddress: UserAddress;
    isLoading: boolean;
    hasError: boolean;
    alertMessage?: string;
}

export interface UserAddressAction {
    type: USER_ADDRESS_ACTION_TYPES;
    payload?: UserAddress;
    alertMessage?: string;
}

export interface UserAddressReducerReturn {
    userAddressState: UserAddressState;
    userAddressDispatch: React.Dispatch<UserAddressAction>;
}

export enum USER_ADDRESS_ACTION_TYPES {
    REGISTER_ADDRESS_SUCCESS = 'LOGIN_SUCCESS',
    USER_ADDRESS_LOADING = 'USER_LOADING',
    USER_ADDRESS_FAILURE = 'USER_FAILURE',
    RESET_STATE = 'RESET_STATE',
}
