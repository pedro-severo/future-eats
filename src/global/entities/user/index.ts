import { useState, createContext, useContext } from "react";
import { User, UserGlobalState, UserInput } from "./interface";

export const useUserDataState = (): UserGlobalState => {
  const [user, setUser] = useState<User>({
    userName: "",
  });

  const setUserProps = (newUserProps: UserInput) => {
    setUser({
      ...user,
      ...newUserProps,
    });
  };

  return {
    user,
    setUserProps,
  };
};

export const UserDataContext = createContext<UserGlobalState>(
  {} as UserGlobalState
);

export const useUserData = (): UserGlobalState => useContext(UserDataContext);
