import React, { Suspense, lazy } from 'react';
import { LazyHeaderLoading } from './lasyLoading';

// istanbul ignore next
const HeaderView = lazy(() =>
    import('./view').then(({ HeaderView }) => ({ default: HeaderView }))
);

export const Header = () => {
    return (
        <Suspense fallback={<LazyHeaderLoading />}>
            <HeaderView data-testid="header-view" />
        </Suspense>
    );
};
