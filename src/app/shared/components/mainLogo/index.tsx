import React from 'react';
import { Suspense, lazy } from 'react';
import designSystem from '../../designSystem';

// istanbul ignore next
const MainLogoView = lazy(() =>
    import('./view').then(({ MainLogoView }) => ({ default: MainLogoView }))
);

export const MainLogo = () => {
    return (
        <Suspense
            fallback={
                <designSystem.circularProgressIndeterminate
                    // TODO: color primary is not getting the correct color settled on themeProvider
                    color="primary"
                    dataTestId="main-logo-lazy-loading"
                />
            }
        >
            <MainLogoView />
        </Suspense>
    );
};
