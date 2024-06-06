import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import { useNavigationHeaderState } from '../../../stores/navigationHeader';
import designSystem from '../../../designSystem';

export const HeaderView = () => {
    const { title, shouldRenderHeader } =
        useNavigationHeaderState().navigationHeader;
    return (
        <HeaderWrapper
            data-testid="HeaderWrapper"
            shouldRenderHeader={shouldRenderHeader}
        >
            {/* TODO: add route: go back */}
            <IconWrapper onClick={() => null}>
                <designSystem.arrowBackIcon />
            </IconWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
    );
};
