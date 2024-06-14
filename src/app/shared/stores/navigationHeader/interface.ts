import { SetStateAction } from 'react';

export interface NavigationHeaderState {
    title: string;
    hasTitle: boolean;
    shouldRenderHeader: boolean;
}

export interface NavigationHeaderStateReturn {
    navigationHeader: NavigationHeaderState;
    setNavigationHeader: React.Dispatch<SetStateAction<NavigationHeaderState>>;
}
