export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    hasAddress: boolean;
    cpf: string;
}

export interface UserState {
    user: User;
    isLoading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export interface UserReducerAction {
    type: USER_ACTION_TYPES;
    payload?: User;
}

export interface UseReducerReturn {
    userState: UserState;
    userDispatch: React.Dispatch<UserReducerAction>;
}

export enum USER_ACTION_TYPES {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_LOADING = 'LOGIN_LOADING',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
}
