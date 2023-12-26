import React from "react";
import { HeaderTitle, HeaderWrapper, IconWrapper } from "./styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// TODO: Create a global state to store back function and header title

export const HeaderView = () => {
  return (
    <HeaderWrapper>
        <IconWrapper>
            <ArrowBackIosNewIcon />
        </IconWrapper>
        <HeaderTitle>
            Titulo 
        </HeaderTitle>
    </HeaderWrapper>
  );
};
