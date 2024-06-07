import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import { useNavigationHeaderState } from '../../stores/navigationHeader';
import designSystem from '../../designSystem';
import { useRouter } from 'next/navigation';

export const HeaderView = () => {
    const { title, shouldRenderHeader } =
        useNavigationHeaderState().navigationHeader;
    const router = useRouter();
    return (
        <HeaderWrapper
            data-testid="HeaderWrapper"
            shouldRenderHeader={shouldRenderHeader}
        >
            {/* TODO: add route: go back */}
            <IconWrapper onClick={() => router.back()}>
                <designSystem.arrowBackIcon />
            </IconWrapper>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
    );
};
