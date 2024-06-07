'use client';
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#5cb646',
        },
        secondary: {
            main: '#b8b8b8',
        },
        error: {
            main: '#e02020',
        },
        text: {
            primary: '#000000',
            hint: '#419bf9',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '16px',
        },
        subtitle1: {
            fontSize: '16px',
        },
    },
});
