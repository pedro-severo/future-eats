import { USER_ACTION_TYPES, UserState, UserReducerAction } from './interface';

export const userInitialState: UserState = {
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        cpf: '',
        hasAddress: false,
    },
    isLoading: false,
    hasError: false,
    alertMessage: undefined,
};

export const userReducer = (
    state: UserState,
    action: UserReducerAction
): UserState => {
    switch (action.type) {
        case USER_ACTION_TYPES.LOGIN_SUCCESS: {
            return {
                user: { ...state.user, ...action.payload },
                isLoading: false,
                hasError: false,
            };
        }
        case USER_ACTION_TYPES.REGISTER_SUCCESS: {
            return {
                user: { ...state.user, ...action.payload },
                isLoading: false,
                hasError: false,
            };
        }
        case USER_ACTION_TYPES.USER_LOADING: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };
        }
        case USER_ACTION_TYPES.USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                alertMessage: action?.alertMessage,
            };
        }
        case USER_ACTION_TYPES.RESET_STATE: {
            return userInitialState;
        }
        default: {
            throw new Error(
                `Unknown action type for userReducer: ${action.type}`
            );
        }
    }
};
