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
        default: {
            return state;
        }
    }
};
