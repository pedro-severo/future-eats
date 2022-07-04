import { ReactElement } from "react";
import useUserDataState from "./state/useUserDataState";
import { UserDataContext } from "./useUserData";

type UseUserDataProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const UseUserDataProvider = ({
  children,
}: UseUserDataProviderProps): ReactElement => {
  const { getUserName, setUserName } = useUserDataState();
  return (
    <UserDataContext.Provider value={{ getUserName, setUserName }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UseUserDataProvider;
