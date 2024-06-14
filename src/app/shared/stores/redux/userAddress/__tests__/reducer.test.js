import { USER_ADDRESS_ACTION_TYPES } from '../interface';
import { userAddressReducer, userAddressInitialState } from '../reducer';

const mockPayload = {
    city: 'city',
    complement: 'complement',
    id: 'id',
    state: 'state',
    streetName: 'streetName',
    streetNumber: 'streetNumber',
    zone: 'zone',
};

describe('userAddressReducer', () => {
    it('should handle SUCCESS', () => {
        const action = {
            type: USER_ADDRESS_ACTION_TYPES.SUCCESS,
            payload: mockPayload,
        };
        const newState = userAddressReducer(userAddressInitialState, action);
        expect(newState.userAddress.id).toBe(mockPayload.id);
        expect(newState.userAddress.city).toBe(mockPayload.city);
        expect(newState.userAddress.complement).toBe(mockPayload.complement);
        expect(newState.userAddress.state).toBe(mockPayload.state);
        expect(newState.userAddress.streetName).toBe(mockPayload.streetName);
        expect(newState.userAddress.streetNumber).toBe(
            mockPayload.streetNumber
        );
        expect(newState.userAddress.zone).toBe(mockPayload.zone);
        expect(newState.isLoading).toBe(false);
        expect(newState.hasError).toBe(false);
    });
    it('should handle LOADING', () => {
        const action = {
            type: USER_ADDRESS_ACTION_TYPES.LOADING,
        };
        const newState = userAddressReducer(userAddressInitialState, action);
        expect(newState.userAddress.id).toBe(
            userAddressInitialState.userAddress.id
        );
        expect(newState.userAddress.city).toBe(
            userAddressInitialState.userAddress.city
        );
        expect(newState.userAddress.complement).toBe(
            userAddressInitialState.userAddress.complement
        );
        expect(newState.userAddress.state).toBe(
            userAddressInitialState.userAddress.state
        );
        expect(newState.userAddress.streetName).toBe(
            userAddressInitialState.userAddress.streetName
        );
        expect(newState.userAddress.streetNumber).toBe(
            userAddressInitialState.userAddress.streetNumber
        );
        expect(newState.userAddress.zone).toBe(
            userAddressInitialState.userAddress.zone
        );
        expect(newState.isLoading).toBe(true);
        expect(newState.hasError).toBe(false);
    });
    it('should handle FAILURE', () => {
        const action = {
            type: USER_ADDRESS_ACTION_TYPES.FAILURE,
            alertMessage: 'foo',
        };
        const newState = userAddressReducer(userAddressInitialState, action);
        expect(newState.userAddress.id).toBe(
            userAddressInitialState.userAddress.id
        );
        expect(newState.userAddress.city).toBe(
            userAddressInitialState.userAddress.city
        );
        expect(newState.userAddress.complement).toBe(
            userAddressInitialState.userAddress.complement
        );
        expect(newState.userAddress.state).toBe(
            userAddressInitialState.userAddress.state
        );
        expect(newState.userAddress.streetName).toBe(
            userAddressInitialState.userAddress.streetName
        );
        expect(newState.userAddress.streetNumber).toBe(
            userAddressInitialState.userAddress.streetNumber
        );
        expect(newState.userAddress.zone).toBe(
            userAddressInitialState.userAddress.zone
        );
        expect(newState.isLoading).toBe(false);
        expect(newState.hasError).toBe(true);
        expect(newState.alertMessage).toBe(action.alertMessage);
    });
    it('should handle RESET_STATE', () => {
        const action = {
            type: USER_ADDRESS_ACTION_TYPES.RESET_STATE,
        };
        const newState = userAddressReducer(userAddressInitialState, action);
        expect(newState.userAddress.id).toBe(
            userAddressInitialState.userAddress.id
        );
        expect(newState.userAddress.city).toBe(
            userAddressInitialState.userAddress.city
        );
        expect(newState.userAddress.complement).toBe(
            userAddressInitialState.userAddress.complement
        );
        expect(newState.userAddress.state).toBe(
            userAddressInitialState.userAddress.state
        );
        expect(newState.userAddress.streetName).toBe(
            userAddressInitialState.userAddress.streetName
        );
        expect(newState.userAddress.streetNumber).toBe(
            userAddressInitialState.userAddress.streetNumber
        );
        expect(newState.userAddress.zone).toBe(
            userAddressInitialState.userAddress.zone
        );
        expect(newState.isLoading).toBe(userAddressInitialState.isLoading);
        expect(newState.hasError).toBe(userAddressInitialState.hasError);
        expect(newState.alertMessage).toBe(
            userAddressInitialState.alertMessage
        );
    });
    it('should handle action type not existent', async () => {
        const action = {
            type: 'xambras',
        };
        try {
            userAddressReducer(userAddressInitialState, action);
        } catch (e) {
            expect(e.message).toBe(
                `Unknown action type for userAddressReducer: ${action.type}`
            );
        }
    });
});
