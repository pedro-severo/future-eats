import React from 'react';
import { IconButton as MUIIconButton } from '@material-ui/core';

export const MemoIconButton = ({ ...props }) => {
    return <MUIIconButton id="mui-icon-button-id" {...props} />;
};

export const IconButton = React.memo(MemoIconButton);
