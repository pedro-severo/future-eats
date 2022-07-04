import { useState } from "react";
import { UserReturn } from "./types";

const useUserDataState = (): UserReturn => {
  const [userNameState, setUserNameState] = useState("");

  const getUserName = () => userNameState;
  const setUserName = (name: string) => setUserNameState(name);

  return {
    getUserName,
    setUserName,
  };
};

export default useUserDataState;
