'use client';
import React from 'react';
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
    // Call inside useEffect is broking application on cpf validation of useSignupSchema hook:
    // yup.string().cpf() => cpf is not a function
    yupCustomValidationsSetup();
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider
                    options={{ enableCssLayer: true, key: 'css' }}
                >
                    <StyledJsxRegistry>
                        <GlobalStateProvider>
                            <APIProvider>
                                <ThemeUsage>
                                    <Header />
                                    {children}
                                </ThemeUsage>
                            </APIProvider>
                        </GlobalStateProvider>
                    </StyledJsxRegistry>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
