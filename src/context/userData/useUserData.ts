import { UserReturn } from "./state/types";
import { createContext, useContext } from "react";

export const UserDataContext = createContext<UserReturn>({} as UserReturn);

export const useUserData = (): UserReturn => useContext(UserDataContext);
