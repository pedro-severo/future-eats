import React, { useEffect, useState } from 'react';
import { AlertProps, Collapse, Alert as MuiAlert } from '@mui/material';
import styled from 'styled-components';

export interface IAlertProps extends AlertProps {
    isOpen: boolean;
    message: string;
    timeout?: number;
}

const StyledCollapse = styled(Collapse)`
    position: absolute;
    top: 36px;
`;

// TODO: Auto close is messing if the same alert is opened twice
export const Alert = ({
    isOpen,
    message,
    timeout = 3000,
    ...props
}: IAlertProps) => {
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
        return () => {
            setTimeout(function () {
                setOpen(false);
            }, timeout);
        };
    }, [isOpen]);

    return (
        <StyledCollapse in={open}>
            <MuiAlert id="mui-alert-id" {...props}>
                {message}
            </MuiAlert>
        </StyledCollapse>
    );
};
