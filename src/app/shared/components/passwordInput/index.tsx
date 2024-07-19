import React from 'react';
import { Control } from 'react-hook-form';
import { usePasswordInput } from './usePasswordInput';
import { PasswordInputView } from './view';

interface IPasswordInput {
    control: Control<any, any>;
    disable: boolean;
    placeholder: string;
    label: string;
    inputName: string;
}

// istanbul ignore file

export const MemoPasswordInput = ({
    control,
    disable,
    placeholder,
    label,
    inputName,
}: IPasswordInput) => {
    const { showPassword, setShowPassword } = usePasswordInput();
    return (
        <PasswordInputView
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            control={control}
            disable={disable}
            placeholder={placeholder}
            label={label}
            inputName={inputName}
        />
    );
};

export const PasswordInput = React.memo(MemoPasswordInput);
