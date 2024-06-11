import { useEffect } from 'react';
import { useNavigationHeaderState } from '../stores/navigationHeader';
import { NavigationHeaderState } from '../stores/navigationHeader/interface';

export const useHeader = (headerProps: NavigationHeaderState) => {
    const { setNavigationHeader } = useNavigationHeaderState();
    useEffect(() => {
        setNavigationHeader(headerProps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setNavigationHeader]);
};
