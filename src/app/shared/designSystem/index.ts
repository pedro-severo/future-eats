import { Button as CustomButton } from './components/Button/index';
import EmptyComponent from './components/EmptyComponent';
import { IconButton } from './components/IconButton';
import { TextFieldInput } from './components/TextField';
import { ArrowBackIos } from './icons/ArrowBack';
import { VisibilityIcon } from './icons/Visibility';
import { VisibilityOffIcon } from './icons/VisibilityOff';
import { InputAdornment } from './components/InputAdornment';
import { Typography } from './components/Typography';
import { Alert } from './components/Alert';
import { CircularProgressIndeterminate } from './components/CircularProgress';
import Cart from './icons/Cart';
import Profile from './icons/Profile';
import Home from './icons/Home';
import { Button } from '@material-ui/core';
import { MemoExoticComponent } from 'react';
// istanbul ignore file

// TODO: Retype props of DesignSystem with material ui components instead custom components
// see button prop type as an example. This will enable vscode props suggestion on the components usage
type DesignSystem = {
    textFieldInput: typeof TextFieldInput | typeof EmptyComponent;
    button: MemoExoticComponent<typeof Button> | typeof EmptyComponent;
    arrowBackIcon: typeof ArrowBackIos | typeof EmptyComponent;
    visibilityIcon: typeof VisibilityIcon | typeof EmptyComponent;
    visibilityOffIcon: typeof VisibilityOffIcon | typeof EmptyComponent;
    iconButton: typeof IconButton | typeof EmptyComponent;
    inputAdornment: typeof InputAdornment | typeof EmptyComponent;
    typography: typeof Typography | typeof EmptyComponent;
    alert: typeof Alert | typeof EmptyComponent;
    circularProgressIndeterminate:
        | typeof CircularProgressIndeterminate
        | typeof EmptyComponent;
    cart: typeof Cart | typeof EmptyComponent;
    home: typeof Home | typeof EmptyComponent;
    profile: typeof Profile | typeof EmptyComponent;
};

const designSystem: DesignSystem = {
    textFieldInput: TextFieldInput || EmptyComponent,
    button: CustomButton || EmptyComponent,
    arrowBackIcon: ArrowBackIos || EmptyComponent,
    visibilityIcon: VisibilityIcon || EmptyComponent,
    visibilityOffIcon: VisibilityOffIcon || EmptyComponent,
    typography: Typography || EmptyComponent,
    iconButton: IconButton || EmptyComponent,
    inputAdornment: InputAdornment || EmptyComponent,
    alert: Alert || EmptyComponent,
    circularProgressIndeterminate:
        CircularProgressIndeterminate || EmptyComponent,
    cart: Cart || EmptyComponent,
    home: Home || EmptyComponent,
    profile: Profile || EmptyComponent,
};

export default designSystem;
