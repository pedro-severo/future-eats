import {
    USER_ADDRESS_ACTION_TYPES,
    UserAddressAction,
    UserAddressState,
} from './interface';

export const userAddressInitialState: UserAddressState = {
    userAddress: {
        userId: '',
        city: '',
        complement: '',
        state: '',
        streetNumber: '',
        zone: '',
        streetName: '',
    },
    isLoading: false,
    hasError: false,
    alertMessage: undefined,
};

export const userAddressReducer = (
    state: UserAddressState,
    action: UserAddressAction
): UserAddressState => {
    switch (action.type) {
        case USER_ADDRESS_ACTION_TYPES.REGISTER_ADDRESS_SUCCESS: {
            return {
                userAddress: { ...state.userAddress, ...action.payload },
                isLoading: false,
                hasError: false,
            };
        }
        case USER_ADDRESS_ACTION_TYPES.USER_ADDRESS_LOADING: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };
        }
        case USER_ADDRESS_ACTION_TYPES.USER_ADDRESS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                alertMessage: action?.alertMessage,
            };
        }
        case USER_ADDRESS_ACTION_TYPES.RESET_STATE: {
            return userAddressInitialState;
        }
        default: {
            throw new Error(
                `Unknown action type for userAddressReducer: ${action.type}`
            );
        }
    }
};
