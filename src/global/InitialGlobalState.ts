import { userState } from "./entities/user/userState";

export const InitialGlobalState = {
  ...userState,
};

export type GlobalState = typeof InitialGlobalState;
