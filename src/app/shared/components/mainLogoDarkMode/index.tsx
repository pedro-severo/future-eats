import React from 'react';
import { Suspense, lazy } from 'react';
import designSystem from '../../designSystem';
import mainLogo from '../../assets/images/logo-future-eats.png';

// istanbul ignore next
const MainLogoDarkModeView = lazy(() =>
    import('./view').then(({ MainLogoDarkModeView }) => ({
        default: MainLogoDarkModeView,
    }))
);

export const MainLogoDarkMode = () => {
    return (
        <Suspense
            fallback={
                <designSystem.circularProgressIndeterminate
                    color="primary"
                    dataTestId="main-logo-lazy-loading"
                />
            }
        >
            <MainLogoDarkModeView
                mainLogo={mainLogo}
                data-testid="main-logo-dark-view"
            />
        </Suspense>
    );
};
