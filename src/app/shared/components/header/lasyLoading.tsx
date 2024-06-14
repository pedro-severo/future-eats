import React from 'react';
import { HeaderWrapper } from './styles';

// istanbul ignore next
export const LazyHeaderLoading = () => {
    return (
        <HeaderWrapper
            $shouldRenderHeader={false}
            data-testid="lazy-header-loading"
        />
    );
};
