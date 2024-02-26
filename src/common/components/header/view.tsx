import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import { useNavigationHeaderData } from '../../../global/entities/navigationHeader';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import designSystem from '../../../designSystem';

export const HeaderView = () => {
    const { navigationHeader } = useNavigationHeaderData();
    const { title, shouldRenderHeader } = navigationHeader;
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
