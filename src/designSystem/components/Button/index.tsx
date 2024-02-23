import React from 'react';
import { Button as MUIButton } from '@material-ui/core';

export const Button = ({ ...props }) => {
    return <MUIButton id="mui-button-id" {...props} />;
};
