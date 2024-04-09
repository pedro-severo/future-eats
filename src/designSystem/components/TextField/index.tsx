import React from 'react';
import { TextField as MUITextField, TextFieldProps } from '@material-ui/core';

export const TextFieldInput = ({ id, ...props }: TextFieldProps) => {
    return (
        <MUITextField variant="outlined" fullWidth={true} id={id} {...props} />
    );
};
