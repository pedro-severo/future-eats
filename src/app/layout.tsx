'use client';
import React, { useEffect } from 'react';
import { Header } from './shared/components/header';
import ThemeUsage from './shared/designSystem/themeUsage';
import { yupCustomValidationsSetup } from './shared/services/yup';
import APIProvider from './shared/services/api';
import GlobalStateProvider from './shared/stores';
import StyledJsxRegistry from './registry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        yupCustomValidationsSetup();
    }, []);
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider
                    options={{ enableCssLayer: true, key: 'css' }}
                >
                    <StyledJsxRegistry>
                        <APIProvider>
                            <GlobalStateProvider>
                                <ThemeUsage>
                                    <Header />
                                    {children}
                                </ThemeUsage>
                            </GlobalStateProvider>
                        </APIProvider>
                    </StyledJsxRegistry>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
