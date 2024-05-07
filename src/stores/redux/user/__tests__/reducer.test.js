import { userInitialState, userReducer } from '../reducer';
import { USER_ACTION_TYPES } from '../interface';

describe('userReducer', () => {
    it('should handle LOGIN_SUCCESS action', () => {
        const action = {
            type: USER_ACTION_TYPES.LOGIN_SUCCESS,
            payload: {
                id: '123',
                name: 'John Doe',
                email: 'john@example.com',
            },
        };
        const newState = userReducer(userInitialState, action);
        expect(newState.user.id).toEqual('123');
        expect(newState.user.name).toEqual('John Doe');
        expect(newState.user.email).toEqual('john@example.com');
        expect(newState.isLoading).toEqual(false);
        expect(newState.hasError).toEqual(false);
    });

    it('should handle SIGNUP_SUCCESS action', () => {
        const action = {
            type: USER_ACTION_TYPES.SIGNUP_SUCCESS,
            payload: {
                id: '456',
                name: 'Jane Smith',
                email: 'jane@example.com',
            },
        };
        const newState = userReducer(userInitialState, action);
        expect(newState.user.id).toEqual('456');
        expect(newState.user.name).toEqual('Jane Smith');
        expect(newState.user.email).toEqual('jane@example.com');
        expect(newState.isLoading).toEqual(false);
        expect(newState.hasError).toEqual(false);
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
