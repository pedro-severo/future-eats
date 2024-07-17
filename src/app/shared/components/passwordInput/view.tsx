import React, { Dispatch, SetStateAction } from 'react';
import { Control, Controller } from 'react-hook-form';
import designSystem from '../../designSystem';
import { theme } from '../../designSystem/themeProvider';

interface IPasswordInputView {
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    control: Control<any, any>;
    disable: boolean;
    inputName: string;
    placeholder: string;
    label: string;
}

export const MemoPasswordInputView = ({
    showPassword,
    setShowPassword,
    control,
    disable,
    inputName,
    placeholder,
    label,
}: IPasswordInputView) => {
    return (
        <Controller
            name={inputName}
            control={control}
            render={
                // istanbul ignore next
                ({ field, fieldState: { error } }) => (
                    <designSystem.textFieldInput
                        {...field}
                        disabled={disable}
                        placeholder={placeholder}
                        label={label}
                        type={showPassword ? 'text' : 'password'}
                        error={!!error}
                        helperText={error?.message}
                        InputProps={{
                            endAdornment: (
                                <designSystem.inputAdornment position="start">
                                    <designSystem.iconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        edge="end"
                                    >
                                        {showPassword ?
                                            <designSystem.visibilityOffIcon
                                                style={{
                                                    color: `${theme.palette.secondary.main}`,
                                                }}
                                            />
                                        :   <designSystem.visibilityIcon
                                                style={{
                                                    color: `${theme.palette.secondary.main}`,
                                                }}
                                            />
                                        }
                                    </designSystem.iconButton>
                                </designSystem.inputAdornment>
                            ),
                        }}
                    />
                )
            }
        />
    );
};

export const PasswordInputView = React.memo(MemoPasswordInputView);
