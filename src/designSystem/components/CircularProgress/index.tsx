import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CircularProgressProps } from '@material-ui/core';

export const CircularProgressIndeterminate = ({
    color,
}: CircularProgressProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color={color} />
        </Box>
    );
};
