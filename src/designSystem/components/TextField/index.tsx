import React from 'react';
import { TextField as MUITextField } from '@material-ui/core';

export const TextFieldInput = ({ ...props }) => {
    return (
        <MUITextField
            id="mui-text-field"
            variant="outlined"
            fullWidth={true}
            {...props}
        />
    );
};
