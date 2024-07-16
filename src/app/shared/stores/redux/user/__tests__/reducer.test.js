import { userInitialState, userReducer } from '../reducer';
import { USER_ACTION_TYPES, USER_ROLES } from '../interface';

describe('userReducer', () => {
    it('should handle LOGIN_SUCCESS action', () => {
        const action = {
            type: USER_ACTION_TYPES.LOGIN_SUCCESS,
            payload: {
                user: {
                    id: '123',
                    name: 'John Doe',
                    email: 'john@example.com',
                    hasAddress: true,
                    cpf: '456',
                    role: USER_ROLES.COMMON_USER,
                },
                token: 'token',
            },
        };
        const newState = userReducer(userInitialState, action);
        expect(newState.user.id).toEqual('123');
        expect(newState.user.name).toEqual('John Doe');
        expect(newState.user.email).toEqual('john@example.com');
        expect(newState.user.hasAddress).toEqual(true);
        expect(newState.user.role).toEqual(USER_ROLES.COMMON_USER);
        expect(newState.user.cpf).toEqual('456');
        expect(newState.token).toEqual('token');
        expect(newState.isLoading).toEqual(false);
        expect(newState.hasError).toEqual(false);
        expect(newState.isAuthenticated).toEqual(true);
    });

    it('should handle SIGNUP_SUCCESS action', () => {
        const action = {
            type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
            payload: {
                user: {
                    id: '123',
                    name: 'John Doe',
                    email: 'john@example.com',
                    hasAddress: true,
                    cpf: '456',
                    role: USER_ROLES.COMMON_USER,
                },
                token: 'token',
            },
        };
        const newState = userReducer(userInitialState, action);
        expect(newState.user.id).toEqual('123');
        expect(newState.user.name).toEqual('John Doe');
        expect(newState.user.email).toEqual('john@example.com');
        expect(newState.user.hasAddress).toEqual(true);
        expect(newState.user.role).toEqual(USER_ROLES.COMMON_USER);
        expect(newState.user.cpf).toEqual('456');
        expect(newState.token).toEqual('token');
        expect(newState.isLoading).toEqual(false);
        expect(newState.hasError).toEqual(false);
        expect(newState.isAuthenticated).toEqual(true);
    });

    it('should handle AUTHENTICATE_SUCCESS action', () => {
        const action = {
            type: USER_ACTION_TYPES.AUTHENTICATE_SUCCESS,
            payload: {
                user: {
                    id: '123',
                    name: 'John Doe',
                    email: 'john@example.com',
                    hasAddress: true,
                    cpf: '456',
                    role: USER_ROLES.COMMON_USER,
                },
                token: 'token',
            },
        };
        const newState = userReducer(userInitialState, action);
        expect(newState.user.id).toEqual('123');
        expect(newState.user.name).toEqual('John Doe');
        expect(newState.user.email).toEqual('john@example.com');
        expect(newState.user.hasAddress).toEqual(true);
        expect(newState.user.role).toEqual(USER_ROLES.COMMON_USER);
        expect(newState.user.cpf).toEqual('456');
        expect(newState.token).toEqual('token');
        expect(newState.isLoading).toEqual(false);
        expect(newState.hasError).toEqual(false);
        expect(newState.isAuthenticated).toEqual(true);
    });

    it('should handle USER_LOADING action', () => {
        const action = { type: USER_ACTION_TYPES.USER_LOADING };
        const newState = userReducer(userInitialState, action);
        expect(newState.isLoading).toEqual(true);
        expect(newState.hasError).toEqual(false);
        expect(newState.user).toEqual(userInitialState.user);
    });

    it('should handle USER_FAILURE action', () => {
        const action = {
            type: USER_ACTION_TYPES.USER_FAILURE,
            alertMessage: 'Failed to load user data',
        };
        const newState = userReducer(userInitialState, action);
        expect(newState.isLoading).toEqual(false);
        expect(newState.hasError).toEqual(true);
        expect(newState.isAuthenticated).toEqual(false);
        expect(newState.user).toEqual(userInitialState.user);
        expect(newState.alertMessage).toEqual('Failed to load user data');
    });

    it('should handle RESET_STATE action', () => {
        const currentState = {
            user: {
                id: '123',
                name: 'John Doe',
                email: 'john@example.com',
            },
            isLoading: true,
            hasError: true,
            alertMessage: 'An error occurred',
        };
        const action = { type: USER_ACTION_TYPES.RESET_STATE };
        const newState = userReducer(currentState, action);
        expect(newState).toEqual(userInitialState);
    });

    it('should throw an error for unknown action type', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        expect(() => userReducer(userInitialState, action)).toThrowError(
            'Unknown action type for userReducer: UNKNOWN_ACTION'
        );
    });
});
