import React from 'react';
import { PropTypes } from '@material-ui/core';
import designSystem from '../../designSystem';

interface ICustomButton {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    buttonColor?: PropTypes.Color;
    circularProgressColor?: 'primary' | 'secondary' | 'inherit';
    isLoading?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const MemoCustomButton = ({
    isLoading = false,
    circularProgressColor,
    type,
    buttonColor,
    variant,
    fullWidth,
    disabled,
    label,
    onClick,
}: ICustomButton) => {
    return (
        <designSystem.button
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            color={buttonColor}
            variant={variant}
            onClick={onClick}
            data-testid="custom-button-wrapper"
        >
            {isLoading ?
                <designSystem.circularProgressIndeterminate
                    color={circularProgressColor}
                    data-testid="custom-buttom-loading"
                />
            :   <span>{label}</span>}
        </designSystem.button>
    );
};

export const CustomButton = React.memo(MemoCustomButton);
