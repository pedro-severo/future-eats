import { SetStateAction } from 'react';

export interface NavigationHeaderState {
    title: string;
    shouldRenderHeader: boolean;
    shouldRenderBackIcon: boolean;
}

export interface NavigationHeaderStateReturn {
    navigationHeader: NavigationHeaderState;
    setNavigationHeader: React.Dispatch<SetStateAction<NavigationHeaderState>>;
}
