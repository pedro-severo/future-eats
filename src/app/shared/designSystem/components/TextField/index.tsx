import React from 'react';
import { TextField as MUITextField, TextFieldProps } from '@material-ui/core';

export const MemoTextFieldInput = ({ id, ...props }: TextFieldProps) => {
    return (
        <MUITextField variant="outlined" fullWidth={true} id={id} {...props} />
    );
};

export const TextFieldInput = React.memo(MemoTextFieldInput);
