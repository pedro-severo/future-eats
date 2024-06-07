import React, { Suspense, lazy } from 'react';
import { LazyHeaderLoading } from './lasyLoading';

const HeaderView = lazy(() =>
    import('./view').then(({ HeaderView }) => ({ default: HeaderView }))
);

export const Header = () => {
    return (
        <Suspense fallback={<LazyHeaderLoading />}>
            <HeaderView />
        </Suspense>
    );
};
