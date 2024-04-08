import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import { useNavigationHeaderState } from '../../../global/navigationHeader';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';
import designSystem from '../../../designSystem';

export const HeaderView = () => {
    const { title, shouldRenderHeader } =
        useNavigationHeaderState().navigationHeader;
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
