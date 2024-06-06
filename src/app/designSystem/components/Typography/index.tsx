import React from 'react';
import { Typography as MUITypography } from '@material-ui/core';

const MemoTypography = ({ ...props }) => {
    return <MUITypography id="mui-typography" {...props} />;
};

export const Typography = React.memo(MemoTypography);
