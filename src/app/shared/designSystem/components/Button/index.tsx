import React, { MemoExoticComponent } from 'react';
import { Button as MUIButton } from '@material-ui/core';

const MemoButton = ({ ...props }) => {
    return <MUIButton id="mui-button-id" {...props} />;
};

export const Button: MemoExoticComponent<typeof MUIButton> =
    React.memo(MemoButton);
