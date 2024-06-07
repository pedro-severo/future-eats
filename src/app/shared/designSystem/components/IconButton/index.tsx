import React from 'react';
import { IconButton as MUIIconButton } from '@material-ui/core';

export const IconButton = ({ ...props }) => {
    return <MUIIconButton id="mui-icon-button-id" {...props} />;
};
