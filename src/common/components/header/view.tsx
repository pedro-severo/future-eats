import React, { useContext } from "react";
import { HeaderTitle, HeaderWrapper, IconWrapper } from "./styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { NavigationHeaderDataContext } from "../../../global/entities/navigationHeader";
import { usePagesNavigation } from "../../../hooks/usePagesNavigation";

export const HeaderView = () => {
  const { navigationHeader } = useContext(NavigationHeaderDataContext)
  const { title, shouldRenderHeader } = navigationHeader
  const { handleGoBack } = usePagesNavigation()
  return (
    <HeaderWrapper shouldRenderHeader={shouldRenderHeader} >
        <IconWrapper onClick={handleGoBack}>
            <ArrowBackIosNewIcon />
        </IconWrapper>
        <HeaderTitle>
            {title} 
        </HeaderTitle>
    </HeaderWrapper>
  );
};
