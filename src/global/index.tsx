import { ReactElement } from "react";
import { useUserDataState, UserDataContext } from "./entities/user";

type GlobalStateProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const GlobalStateProvider = ({
  children,
}: GlobalStateProviderProps): ReactElement => {
  const { user, setUserProps } = useUserDataState();
  return (
    <UserDataContext.Provider value={{ user, setUserProps }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default GlobalStateProvider;
