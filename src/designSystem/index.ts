import { Button } from './components/Button';
import EmptyComponent from './components/EmptyComponent';
import { IconButton } from './components/IconButton';
import { TextFieldInput } from './components/TextField';
import { ArrowBackIos } from './icons/ArrowBack';
import { VisibilityIcon } from './icons/Visibility';
import { VisibilityOffIcon } from './icons/VisibilityOff';
import { InputAdornment } from './components/InputAdornment';
import { Typography } from './components/Typography';
import { Alert } from './components/Alert';
// istanbul ignore file

type DesignSystem = {
    textFieldInput: typeof TextFieldInput;
    button: typeof Button;
    arrowBackIcon: typeof ArrowBackIos;
    visibilityIcon: typeof VisibilityIcon;
    visibilityOffIcon: typeof VisibilityOffIcon;
    iconButton: typeof IconButton;
    inputAdornment: typeof InputAdornment;
    typography: typeof Typography;
    alert: typeof Alert;
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
    alert: Alert || EmptyComponent,
};

export default designSystem;
