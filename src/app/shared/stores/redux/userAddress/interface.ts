export interface UserAddress {
    id: string;
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
    SUCCESS = 'SUCCESS',
    LOADING = 'LOADING',
    FAILURE = 'FAILURE',
    RESET_STATE = 'RESET_STATE',
}
