'use client';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themeProvider';

// eslint-disable-next-line
const ThemeUsage: React.FC<any> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeUsage;
