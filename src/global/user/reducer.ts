import {
    USER_ACTION_TYPES,
    User,
    UserState,
    UserReducerAction,
} from './interface';

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
};

export const userReducer = (
    state: UserState,
    action: UserReducerAction
): UserState => {
    switch (action.type) {
        case USER_ACTION_TYPES.LOGIN_SUCCESS: {
            return {
                user: action.payload as User,
                isLoading: false,
                hasError: false,
            };
        }
        case USER_ACTION_TYPES.LOGIN_LOADING: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };
        }
        case USER_ACTION_TYPES.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }
        default: {
            throw new Error(
                `Unknown action type for userReducer: ${action.type}`
            );
        }
    }
};
