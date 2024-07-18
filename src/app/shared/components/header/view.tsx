'use client';
import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import designSystem from '../../designSystem';

interface IHeaderView {
    title: string;
    shouldRenderHeader: boolean;
    shouldRenderBackIcon: boolean;
    goBack: () => void;
    pathName: string;
}

const MemoHeader = ({
    goBack,
    pathName,
    shouldRenderBackIcon,
    shouldRenderHeader,
    title,
}: IHeaderView) => {
    return (
        <HeaderWrapper
            data-testid="header-wrapper"
            $shouldRenderHeader={shouldRenderHeader}
            $pathName={pathName}
        >
            {shouldRenderBackIcon && (
                <IconWrapper data-testid="icon-wrapper" onClick={goBack}>
                    <designSystem.arrowBackIcon />
                </IconWrapper>
            )}
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderWrapper>
    );
};

export const HeaderView = React.memo(MemoHeader);
