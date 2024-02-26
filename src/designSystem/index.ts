import { ComponentType } from 'react';
import { Button } from './components/Button';
import EmptyComponent from './components/EmptyComponent';
import { IconButton } from './components/IconButton';
import { TextFieldInput } from './components/TextField';
import { ArrowBackIos } from './icons/ArrowBack';
import { VisibilityIcon } from './icons/Visibility';
import { VisibilityOffIcon } from './icons/VisibilityOff';
import { InputAdornment } from './components/InputAdornment';
import { Typography } from './components/Typography';
// istanbul ignore file

type DesignSystem = {
    [key: string]: ComponentType<any>;
};

const designSystem: DesignSystem = {
    textFieldInput: TextFieldInput || EmptyComponent,
    button: Button || EmptyComponent,
    arrowBackIcon: ArrowBackIos || EmptyComponent,
    visibilityIcon: VisibilityIcon || EmptyComponent,
    visibilityOffIcon: VisibilityOffIcon || EmptyComponent,
    iconButton: IconButton || EmptyComponent,
    inputAdornment: InputAdornment || EmptyComponent,
    typography: Typography || EmptyComponent,
};

export default designSystem;
