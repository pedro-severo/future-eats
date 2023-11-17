import { TextField as MUITextField } from "@material-ui/core"


export const TextFieldInput = ({...props}) => {
    return <MUITextField
        variant="outlined"
        fullWidth={true}
        {...props}
    />   
}