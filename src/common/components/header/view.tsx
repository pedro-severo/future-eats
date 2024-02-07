import React from 'react';
import { HeaderTitle, HeaderWrapper, IconWrapper } from './styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigationHeaderData } from '../../../global/entities/navigationHeader';
import { usePagesNavigation } from '../../../hooks/usePagesNavigation';

export const HeaderView = () => {
    const { navigationHeader } = useNavigationHeaderData();
    const { title, shouldRenderHeader } = navigationHeader;
    const { handleGoBack } = usePagesNavigation();
    return (
        <HeaderWrapper shouldRenderHeader={shouldRenderHeader}>
            {shouldRenderHeader && (
                <>
                    <IconWrapper onClick={handleGoBack}>
                        <ArrowBackIosNewIcon />
                    </IconWrapper>
                    <HeaderTitle>{title}</HeaderTitle>
                </>
            )}
        </HeaderWrapper>
    );
};
