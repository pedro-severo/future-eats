import { useNavigationHeaderState } from '../../stores/navigationHeader';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useHeader = () => {
    const {
        navigationHeader: { title, shouldRenderHeader, shouldRenderBackIcon },
    } = useNavigationHeaderState();
    const router = useRouter();
    const pathName = usePathname();
    const goBack = useCallback(() => {
        router.back();
    }, []);
    return {
        title,
        shouldRenderHeader,
        shouldRenderBackIcon,
        goBack,
        pathName,
    };
};
