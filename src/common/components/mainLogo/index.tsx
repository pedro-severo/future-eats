import React from 'react';
import { Suspense, lazy } from 'react';
import designSystem from '../../../designSystem';

const MainLogoView = lazy(() =>
    import('./view').then(({ MainLogoView }) => ({ default: MainLogoView }))
);

export const MainLogo = () => {
    return (
        <Suspense
            fallback={
                <designSystem.circularProgressIndeterminate color="primary" />
            }
        >
            <MainLogoView />
        </Suspense>
    );
};
