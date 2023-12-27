import { ReactElement } from "react";
import { useNavigationHeaderDataState, NavigationHeaderDataContext } from ".";

type UseNavigationHeaderDataProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const GlobalNavigationHeaderProvider = ({
  children,
}: UseNavigationHeaderDataProviderProps): ReactElement => {
  const { navigationHeader, setNavigationHeaderProps } = useNavigationHeaderDataState();
  return (
    <NavigationHeaderDataContext.Provider value={{ navigationHeader, setNavigationHeaderProps }}>
      {children}
    </NavigationHeaderDataContext.Provider>
  );
};

export default GlobalNavigationHeaderProvider;
