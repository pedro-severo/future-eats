import { useEffect } from 'react';
import { useNavigationHeaderState } from '../stores/navigationHeader';

// istanbul ignore file

interface IUseHeader {
    title: string;
    shouldRenderHeader: boolean;
    shouldRenderBackIcon?: boolean;
}

export const useHeader = ({
    shouldRenderBackIcon = true,
    shouldRenderHeader,
    title,
}: IUseHeader) => {
    const { setNavigationHeader } = useNavigationHeaderState();
    useEffect(() => {
        setNavigationHeader({
            shouldRenderBackIcon,
            shouldRenderHeader,
            title,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setNavigationHeader]);
};
