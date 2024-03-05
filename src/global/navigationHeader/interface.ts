export interface NavigationHeaderState {
    title: string;
    hasTitle: boolean;
    shouldRenderHeader: boolean;
    navigationHistory: NavigationHeaderState[];
}

export interface NavigationHeaderReducerAction {
    type: NAVIGATION_ACTION_TYPES;
    payload?: NavigationHeaderState;
}

export interface NavigationHeaderReducerReturn {
    navigationHeaderState: NavigationHeaderState;
    navigationHeaderDispatch: React.Dispatch<NavigationHeaderReducerAction>;
}

export enum NAVIGATION_ACTION_TYPES {
    NAVIGATE = 'NAVIGATE',
}
