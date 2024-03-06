import {
    NAVIGATION_ACTION_TYPES,
    NavigationHeaderReducerAction,
    NavigationHeaderState,
} from './interface';

export const navigationHeaderInitialState: NavigationHeaderState = {
    title: '',
    hasTitle: false,
    shouldRenderHeader: false,
    navigationHistory: [],
};

export const navigationHeaderReducer = (
    state: NavigationHeaderState,
    action: NavigationHeaderReducerAction
): NavigationHeaderState => {
    switch (action.type) {
        case NAVIGATION_ACTION_TYPES.NAVIGATE:
            return action.payload as NavigationHeaderState;
        default:
            throw new Error(
                `Unknown action type for navigationHeaderReducer: ${action.type}`
            );
    }
};
