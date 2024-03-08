import { NAVIGATION_ACTION_TYPES } from '../interface';
import {
    navigationHeaderInitialState,
    navigationHeaderReducer,
} from '../reducer';

const mockNewState = {
    title: 'New Title',
    hasTitle: true,
    shouldRenderHeader: true,
    navigationHistory: [],
};

describe('navigationHeaderReducer', () => {
    it("should test 'NAVIGATE' type of reducer", () => {
        const result = navigationHeaderReducer(navigationHeaderInitialState, {
            type: NAVIGATION_ACTION_TYPES.NAVIGATE,
            payload: mockNewState,
        });
        expect(result.title).toBe(mockNewState.title);
        expect(result.hasTitle).toBe(mockNewState.hasTitle);
        expect(result.shouldRenderHeader).toBe(mockNewState.shouldRenderHeader);
        expect(result.navigationHistory).toEqual(
            mockNewState.navigationHistory
        );
    });
    it('should test default of reducer', () => {
        try {
            const result = navigationHeaderReducer(
                navigationHeaderInitialState,
                {
                    type: 'INVALID_TYPE',
                    payload: mockNewState,
                }
            );
            expect(result).toThrow(TypeError);
        } catch (e) {
            expect(e.message).toBe(
                'Unknown action type for navigationHeaderReducer: INVALID_TYPE'
            );
        }
    });
});
