import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { CircularProgressProps } from '@material-ui/core';

interface ICircularProgressIndeterminate extends CircularProgressProps {
    dataTestId?: string;
}

export const CircularProgressIndeterminate = ({
    color,
    dataTestId = 'circular-progress-indeterminate',
}: ICircularProgressIndeterminate) => {
    return (
        <Box sx={{ display: 'flex' }} data-testid={dataTestId}>
            <CircularProgress color={color} />
        </Box>
    );
};
