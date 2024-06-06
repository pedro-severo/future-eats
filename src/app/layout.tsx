'use client';
import React from 'react';
import { Header } from './common/components/header';
import ThemeUsage from './designSystem/themeUsage';
import { yupCustomValidationsSetup } from './services/yup';
import APIProvider from './services/api';
import GlobalStateProvider from './stores';
import StyledJsxRegistry from './registry';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // TODO: see if yupCustomValidationsSetup is running just once
    yupCustomValidationsSetup();
    return (
        <html lang="en">
            <body>
                <script>0</script>
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
            </body>
        </html>
    );
}
