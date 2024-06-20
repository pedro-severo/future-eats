'use client';

import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import { useNavigationHeaderState } from '../../stores/navigationHeader';
import designSystem from '../../designSystem';
import { usePathname, useRouter } from 'next/navigation';

export const HeaderView = () => {
    const { title, shouldRenderHeader, shouldRenderBackIcon } =
        useNavigationHeaderState().navigationHeader;
    const router = useRouter();
    const pathName = usePathname();
    return (
        <HeaderWrapper
            data-testid="HeaderWrapper"
            $shouldRenderHeader={shouldRenderHeader}
            $pathName={pathName}
        >
            {shouldRenderBackIcon && (
                <IconWrapper onClick={() => router.back()}>
                    <designSystem.arrowBackIcon />
                </IconWrapper>
            )}
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
    );
};
