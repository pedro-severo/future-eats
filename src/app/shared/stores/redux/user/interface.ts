export interface User {
    id: string;
    name: string;
    email: string;
    hasAddress: boolean;
    cpf: string;
    role?: USER_ROLES;
}

export enum USER_ROLES {
    COMMON_USER,
    RESTAURANT_OWNER,
}

export interface UserState {
    user?: User;
    token: string;
    isLoading: boolean;
    hasError: boolean;
    isAuthenticated?: boolean;
    alertMessage?: string;
}

interface UserPayload {
    user: User;
    token: string;
}

export interface UserReducerAction {
    type: USER_ACTION_TYPES;
    payload?: UserPayload;
    alertMessage?: string;
}

export interface UseReducerReturn {
    userState: UserState;
    userDispatch: React.Dispatch<UserReducerAction>;
}

export enum USER_ACTION_TYPES {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    AUTHENTICATE_SUCCESS,
    USER_LOADING,
    USER_FAILURE,
    RESET_STATE,
}
