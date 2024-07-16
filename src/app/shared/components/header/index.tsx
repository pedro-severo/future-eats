import React, { Suspense, lazy } from 'react';
import { LazyHeaderLoading } from './lasyLoading';
import { useHeader } from './useHeader';

// istanbul ignore next
const HeaderView = lazy(() =>
    import('./view').then(({ HeaderView }) => ({ default: HeaderView }))
);

export const Header = () => {
    const {
        title,
        shouldRenderHeader,
        shouldRenderBackIcon,
        goBack,
        pathName,
    } = useHeader();
    return (
        <Suspense fallback={<LazyHeaderLoading />}>
            <HeaderView
                data-testid="header-view"
                title={title}
                shouldRenderHeader={shouldRenderHeader}
                shouldRenderBackIcon={shouldRenderBackIcon}
                goBack={goBack}
                pathName={pathName}
            />
        </Suspense>
    );
};
