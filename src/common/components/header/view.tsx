import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import { useNavigationHeaderState } from '../../../global/navigationHeader/context';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import designSystem from '../../../designSystem';

export const HeaderView = () => {
    const { navigationHeaderState } = useNavigationHeaderState();
    const { title, shouldRenderHeader } = navigationHeaderState;
    const { handleGoBack } = usePagesNavigation();
    return (
        <HeaderWrapper
            data-testid="HeaderWrapper"
            shouldRenderHeader={shouldRenderHeader}
        >
            <IconWrapper onClick={handleGoBack}>
                <designSystem.arrowBackIcon />
            </IconWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
    );
};
